import { Charset, CharsetType, CheckCustomCharacters, CodeGenerationTarget, DeobfuscationProtection, DeobfuscationProtectionType, Obfuscate, ObfuscateError } from "./lib.js";

document.title = "j̏ͭͯͤͫ͗͋s͔̣͎̎̑ͭͩ-̣͇ͮͦZ̹͚̫̪͓̠͐ͭ͊̽̾̽ ͍̣̯ͮ̏̂̄ͧͯ̚-͗̍̂ͯ̅̚ ͬ̂ͯ͋J̞̩̠͓͈̳̩ã̰̥̞͚͓v͚̞̯̺͇ḁ̲̹̤͎ͤS̱̰̠̣͚͛̈̌̄̚ͅc͖̥͉̹̮̻̓̊̑ri̭̗̳̩̾p͖͇̟͒t̅̇͋ͅ ̥o̯̗̱b͖̦̹̣̞f̺̥̽̂u͎̖̦̻̻͔̗̐ͥ̂̓̒̅̅s̰̪̞ͫ̿c̲͈̪͓̖ͭ̽â̩͙ͅt̻̺͚ō̝̗͔̗̰r̠̩̤͚̋ͩ";

const DOM = {
    mainPage: document.getElementById("main_page")!,
    codeInputTextArea: document.getElementById("text_area") as HTMLTextAreaElement,
    obfuscateResultTextArea: document.getElementById("result_text") as HTMLTextAreaElement,
    zalgoLevelSliderContainer: document.getElementById("zalgo_level_slider_container")!,
    zalgoLevelText: document.getElementById("zalgo_level_text")!,
    zalgoLevelSlider: document.getElementById("zalgo_level_slider") as HTMLInputElement,
    variableNameLengthSlider: document.getElementById("variable_name_length_slider") as HTMLInputElement,
    variableNameLengthText: document.getElementById("variable_name_length_text")!,
    charsetSelector: document.getElementById("charset_selector") as HTMLSelectElement,
    zalgoCharsetOption: document.getElementById("type_zalgo") as HTMLOptionElement,
    invisibleCharsetOption: document.getElementById("type_invisible") as HTMLOptionElement,
    optionsOverlay: document.getElementById("options_overlay")!,
    deobfuscationProtectionOptions: document.getElementById("deobfuscation_protection_options")!,
    customizeCharactersButton: document.getElementById("custom_charset_customizer_button") as HTMLButtonElement,
    customizeCharactersPage: document.getElementById("customize_page")!,
    customizeCharactersTextArea: document.getElementById("customize_text_area") as HTMLTextAreaElement,
    customCodeEditButton: document.getElementById("custom_code_edit_button") as HTMLButtonElement,
    customCodeEditPage: document.getElementById("customize_deobfuscation_code_page")!,
    customCodeEditTextArea: document.getElementById("deobfuscation_custom_code_text_area") as HTMLTextAreaElement
};

function CopyResult(button: HTMLButtonElement)
{
    button.innerText = "Copied!";
    navigator.clipboard.writeText(DOM.obfuscateResultTextArea.value);
}

function LogarithmicSliderMapValue(sliderMin: number, sliderMax: number, base: number, rawValue: number)
{
    const value = (Math.pow(base, rawValue) - 1) / (base - 1);
    return Math.round(sliderMin + (sliderMax - sliderMin) * value);
}

function LogarithmicSliderUnmapValue(sliderMin: number, sliderMax: number, base: number, targetValue: number)
{
    const t = (targetValue - sliderMin) / (sliderMax - sliderMin);
    const x = t * (base - 1) + 1;
    return Math.log(x) / Math.log(base);
}

const zalgoLevelSliderMinValue = 0;
const zalgoLevelSliderMaxValue = 100;
const zalgoLevelSliderBase = 10;

let zalgoLevel = 3;
function slider_zalgoLevel(e: HTMLInputElement)
{
    zalgoLevel = LogarithmicSliderMapValue(
        zalgoLevelSliderMinValue,
        zalgoLevelSliderMaxValue,
        zalgoLevelSliderBase,
        Number(e.value)
    );

    DOM.zalgoLevelText.textContent = "Zalgo level: " + zalgoLevel.toString();
}

DOM.zalgoLevelSlider.value = LogarithmicSliderUnmapValue(
    zalgoLevelSliderMinValue,
    zalgoLevelSliderMaxValue,
    zalgoLevelSliderBase,
    zalgoLevel
).toString();

const variableNameLengthSliderMinValue = 2;
const variableNameLengthSliderMaxValue = 50;
const variableNameLengthSliderBase = 10;

let variableNameLength = 5;
function slider_variableLength(e: HTMLInputElement)
{
    variableNameLength = LogarithmicSliderMapValue(
        variableNameLengthSliderMinValue,
        variableNameLengthSliderMaxValue,
        variableNameLengthSliderBase,
        Number(e.value)
    );

    DOM.variableNameLengthText.textContent = "Variable name length: " + variableNameLength.toString();
}

DOM.variableNameLengthSlider.value = LogarithmicSliderUnmapValue(
    variableNameLengthSliderMinValue,
    variableNameLengthSliderMaxValue,
    variableNameLengthSliderBase,
    variableNameLength
).toString();

function ShowOptions(show: boolean)
{
    DOM.optionsOverlay.style.display = show ? "flex" : "none";
    DOM.mainPage.style.filter = show ? "blur(3px)" : "";
}

function ToggleCustomizeMode(on: boolean)
{
    if (!on && !ValidateCustomCharacters())
    {
        return;
    }

    DOM.mainPage.style.display = on ? "none" : "";
    DOM.customizeCharactersPage.style.display = on ? "" : "none";
}

let customCharacters: string[] = [];
function ValidateCustomCharacters()
{
    const characters = [...DOM.customizeCharactersTextArea.value];

    const { startingChars, nonStartingChars, invalidChars } = CheckCustomCharacters(characters);

    const invalidCharsDiv = document.getElementById("invalid_chars")!;
    if (invalidChars.size !== 0)
    {
        const codePointsDivText = Array.from(invalidChars).reduce((acc, curr) =>
        {
            const codePoint = curr.codePointAt(0);
            if (codePoint === undefined)
            {
                return acc;
            }

            if (curr === " ")
            {
                curr = "space";
            }

            return acc + "<div style='font-family: consolas; font-size: 20px; margin-top: 10px;'>U+"
                + codePoint.toString(16).toUpperCase().padStart(4, "0") + " <span class='invalid_char'>" + curr + "</span></div>";
        }, "");

        invalidCharsDiv.innerHTML = "<div style='margin-top: 10px;'>The following character" + (invalidChars.size === 1 ? "" : "s")
            + " cannot be used in variable names:</div>" + codePointsDivText;

        invalidCharsDiv.style.display = "";
        return false;
    }
    else if (startingChars.length === 0 && nonStartingChars.length !== 0)
    {
        invalidCharsDiv.innerHTML = "<div style='margin-top: 10px;'>There are no characters that are valid starting characters in variable names</div>";
        invalidCharsDiv.style.display = "";
        return false;
    }
    else
    {
        invalidCharsDiv.style.display = "none";
        customCharacters = characters;
        return true;
    }
}

let charset: CharsetType = "zalgo";
function CharsetChanged(name: string)
{
    switch (name)
    {
        case "zalgo":
        case "invisible":
        case "iiii":
        case "lines":
        case "custom":
            charset = name;
            break;
        default:
            return;
    }

    DOM.zalgoLevelSliderContainer.style.display = (charset === "zalgo") ? "" : "none";
    DOM.customizeCharactersButton.style.display = (charset === "custom") ? "" : "none";
}

let codeGenerationTarget: CodeGenerationTarget = "es6+";
function CodeGenerationTargetChanged(target: string)
{
    switch (target)
    {
        case "es5-":
        case "es6+":
        case "nodejs":
            codeGenerationTarget = target;
            break;
        default:
            return;
    }

    const newFeaturesDisabled = codeGenerationTarget === "es5-";

    DOM.zalgoCharsetOption.disabled = newFeaturesDisabled;
    DOM.invisibleCharsetOption.disabled = newFeaturesDisabled;

    if (newFeaturesDisabled)
    {
        const selectedValue = DOM.charsetSelector.value;
        if (selectedValue === "zalgo" || selectedValue === "invisible")
        {
            DOM.charsetSelector.value = "iiii";
            CharsetChanged("iiii");
        }
    }
}

let isDeobfuscationProtection = false;
let deobfuscationProtectionMode: DeobfuscationProtectionType = "skip";

function DeobfuscationProtectionChanged(on: boolean)
{
    isDeobfuscationProtection = on;
    DOM.deobfuscationProtectionOptions.style.visibility = on ? "" : "hidden";
    DOM.customCodeEditButton.style.display = (deobfuscationProtectionMode === "custom" && on) ? "" : "none";
}

function DeobfuscationProtectionModeChanged(mode: string)
{
    switch (mode)
    {
        case "skip":
        case "error":
        case "loop":
        case "custom":
            deobfuscationProtectionMode = mode;
            break;
        default:
            return;
    }

    DOM.customCodeEditButton.style.display = (mode === "custom" && isDeobfuscationProtection) ? "" : "none";
}

function ShowCustomCodeEditor(show: boolean)
{
    ShowOptions(false);
    DOM.mainPage.style.display = show ? "none" : "";
    DOM.customCodeEditPage.style.display = show ? "" : "none";
}

function AutoResizeTextarea(textarea: HTMLTextAreaElement, padding: number)
{
    textarea.style.height = "auto";
    textarea.style.height = (textarea.scrollHeight - padding * 2) + "px";
}

function ObfuscateButton()
{
    const text = DOM.codeInputTextArea.value;

    const charsetData = ((): Charset =>
    {
        switch (charset)
        {
            case "zalgo": return {
                type: "zalgo",
                zalgoLevel
            };
            case "custom": return {
                type: "custom",
                characters: customCharacters
            };
            default: return {
                type: charset
            };
        }
    })();

    const deobfuscationProtection = ((): DeobfuscationProtection | undefined =>
    {
        if (!isDeobfuscationProtection)
        {
            return undefined;
        }

        switch (deobfuscationProtectionMode)
        {
            case "custom": return {
                type: "custom",
                codeToRun: DOM.customCodeEditTextArea.value
            };
            default: return {
                type: deobfuscationProtectionMode
            };
        }
    })();

    let result = "";
    try
    {
        result = Obfuscate(text, {
            charset: charsetData,
            variableNameLength,
            target: codeGenerationTarget,
            deobfuscationProtection
        });
    }
    catch (ex: unknown)
    {
        if (ex instanceof ObfuscateError)
        {
            alert(ex.message);
        }

        return;
    }

    DOM.obfuscateResultTextArea.value = result;
}

// Set functions on the window object, so that they are callable from html
const windowAny = window as any;
windowAny.CopyResult = CopyResult;
windowAny.slider_zalgoLevel = slider_zalgoLevel;
windowAny.slider_variableLength = slider_variableLength;
windowAny.ShowOptions = ShowOptions;
windowAny.ToggleCustomizeMode = ToggleCustomizeMode;
windowAny.CharsetChanged = CharsetChanged;
windowAny.CodeGenerationTargetChanged = CodeGenerationTargetChanged;
windowAny.DeobfuscationProtectionChanged = DeobfuscationProtectionChanged;
windowAny.DeobfuscationProtectionModeChanged = DeobfuscationProtectionModeChanged;
windowAny.ShowCustomCodeEditor = ShowCustomCodeEditor;
windowAny.AutoResizeTextarea = AutoResizeTextarea;
windowAny.ObfuscateButton = ObfuscateButton;

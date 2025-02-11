/**
 * @license
 * Copyright (c) 2024-2025 prbegd
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated  documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const { ArgumentType, BlockType, TargetType, Cast, translate, extensions, runtime } = window.Scratch;
translate.setup({
    "zh-cn": {
        "stlsDeviceInfo.name": "设备信息",
        "stlsDeviceInfo.description": "便携地获取设备信息",

        "stlsDeviceInfo.getNavigator": "获取用户代理信息[state]",
        "stlsDeviceInfo.getClipboard": "获取剪贴板内容 限制类型[mime]",
        "stlsDeviceInfo.isDataURL": "[str]是Data URL？",
        "stlsDeviceInfo.readDataURL": "获取DataURL[dataURL]的[part]",
        "stlsDeviceInfo.encodeDataURL": "编码DataURL[str]，MIME类型[mime]，是Base64编码[base64]",
        "stlsDeviceInfo.decodeDataURL": "解码DataURL[dataURL]（仅支持文本）",

        "stlsDeviceInfo.title.dataURL": "🔗Data URL工具",
        "stlsDeviceInfo.title.otherTools": "🛠️其他工具",

        "stlsDeviceInfo.mime.all": "无限制",
        "stlsDeviceInfo.mime.textPlain": "纯文本",
        "stlsDeviceInfo.mime.html": "HTML文档",
        "stlsDeviceInfo.mime.css": "CSS样式表",
        "stlsDeviceInfo.mime.jpeg": "JPEG图像",
        "stlsDeviceInfo.mime.png": "PNG图像",
        "stlsDeviceInfo.mime.gif": "GIF图像",
        "stlsDeviceInfo.mime.mpeg": "MP3音频",
        "stlsDeviceInfo.mime.wav": "WAV音频",
        "stlsDeviceInfo.mime.mp4": "MP4视频",
        "stlsDeviceInfo.mime.avi": "AVI视频",

        "stlsDeviceInfo.dataURLParts.header": "头部",
        "stlsDeviceInfo.dataURLParts.type": "MIME类型",
        "stlsDeviceInfo.dataURLParts.data": "数据",

        "stlsDeviceInfo.yna.auto": "自动",
        "stlsDeviceInfo.yna.yes": "是",
        "stlsDeviceInfo.yna.no": "否",

        "stlsDeviceInfo.clientState.batteryLevel": "电池电量",
        "stlsDeviceInfo.clientState.deviceMemory": "设备内存（GB）",
        "stlsDeviceInfo.clientState.hardwareConcurrency": "CPU逻辑处理器数量",
        "stlsDeviceInfo.clientState.languages": "首选语言列表",
        "stlsDeviceInfo.clientState.maxTouchPoints": "最大触摸接触数量",

        "stlsDeviceInfo.tooltip.getClipboard": "获取剪贴板内容。参数传入MIME类型数组，返回第一个符合传入类型的内容。如果传入的不是数组则视为不限制类型。获取失败或剪贴板为空时返回null。成功后会返回一个Data URL。",
        "stlsDeviceInfo.tooltip.browserNotSupport": "注：此积木的部分功能在特定浏览器上可能无法使用"
    },
    "en": {
        "stlsDeviceInfo.name": "Device Info",
        "stlsDeviceInfo.description": "Portable device information acquisition",

        "stlsDeviceInfo.getNavigator": "Get user agent information [state]",
        "stlsDeviceInfo.getClipboard": "Get clipboard content limit type[mime]",
        "stlsDeviceInfo.isDataURL": "[str] is Data URL?",
        "stlsDeviceInfo.readDataURL": "Get [part] of the DataURL [dataURL]",
        "stlsDeviceInfo.encodeDataURL": "Encode DataURL [str], MIME type [mime], is Base64 encoding [base64]",
        "stlsDeviceInfo.decodeDataURL": "Decode DataURL [dataURL] (only supports text)",

        "stlsDeviceInfo.title.dataURL": "🔗Data URL Tools",
        "stlsDeviceInfo.title.otherTools": "🛠️Other Tools",

        "stlsDeviceInfo.mime.all": "No limit",
        "stlsDeviceInfo.mime.plainText": "Plain text",
        "stlsDeviceInfo.mime.html": "HTML document",
        "stlsDeviceInfo.mime.css": "CSS stylesheet",
        "stlsDeviceInfo.mime.jpeg": "JPEG image",
        "stlsDeviceInfo.mime.png": "PNG image",
        "stlsDeviceInfo.mime.gif": "GIF image",
        "stlsDeviceInfo.mime.mpeg": "MP3 audio",
        "stlsDeviceInfo.mime.wav": "WAV audio",
        "stlsDeviceInfo.mime.mp4": "MP4 video",
        "stlsDeviceInfo.mime.avi": "AVI video",

        "stlsDeviceInfo.dataURLParts.header": "Header",
        "stlsDeviceInfo.dataURLParts.type": "MIME type",
        "stlsDeviceInfo.dataURLParts.data": "Data",

        "stlsDeviceInfo.yna.auto": "Auto",
        "stlsDeviceInfo.yna.yes": "Yes",
        "stlsDeviceInfo.yna.no": "No",

        "stlsDeviceInfo.clientState.batteryLevel": "Battery level",
        "stlsDeviceInfo.clientState.deviceMemory": "Device memory (GB)",
        "stlsDeviceInfo.clientState.hardwareConcurrency": "Number of CPU logical processors",
        "stlsDeviceInfo.clientState.languages": "Preferred language list",
        "stlsDeviceInfo.clientState.maxTouchPoints": "Maximum number of touch contacts",

        "stlsDeviceInfo.tooltip.getClipboard": "Get the contents of the clipboard. Arguments are passed as an array of MIME types, returning the first content that matches the passed type. If the argument is not an array, it is treated as an unrestricted type. Returns null if the fetch fails or the clipboard is empty, and returns a Data URL if it succeeds.",
        "stlsDeviceInfo.tooltip.browserNotSupport": "Note: Some features of this block may not be available in certain browsers."
    }
});
//#region 通用函数
function i18n(key: string) {
    return translate({ id: key });
}

function strJsonToArr(jsonStr: string) {
    try {
        let result = JSON.parse(jsonStr);
        if (Array.isArray(result)) return result;
        return undefined;
    } catch (e) {
        return undefined;
    }
}
function isBase64(str: string) {
    return /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/.test(str);
}
const decodeBase64_decoder = new TextDecoder();
function decodeBase64(str: string) {
    const binString = atob(str);
    const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0) as number);
    return decodeBase64_decoder.decode(bytes);
}
//#endregion

//#region 剪贴板
async function readClipboard(
    allowedMimeTypes?: string[]
): Promise<string | null> {
    try {
        // 浏览器支持检查
        if (!navigator.clipboard?.read)
            return null;

        // 权限检查
        const permission = await navigator.permissions.query({
            name: 'clipboard-read' as PermissionName
        });

        if (permission.state === 'denied')
            return null;

        // 读取剪贴板
        const clipboardItems = await navigator.clipboard.read();

        // 如果没有剪贴板内容
        if (clipboardItems.length === 0)
            return null;

        // 只处理第一个剪贴板项
        const firstItem = clipboardItems[0];

        // 获取允许的类型（优先过滤）
        let validTypes: ReadonlyArray<string>;
        if (allowedMimeTypes) {
            allowedMimeTypes.every(t => t.toLowerCase());
            validTypes = firstItem.types.filter(t => allowedMimeTypes.includes(t));
        } else
            validTypes = firstItem.types;

        // 如果没有有效类型
        if (validTypes.length === 0) {
            return null;
        }

        // 取第一个有效类型
        const targetType = validTypes[0];

        try {
            // 获取 Blob 并转换
            const blob = await firstItem.getType(targetType);
            const dataUrl = await blobToDataURL(blob);
            return dataUrl;
        } catch (error) {
            return null;
        }
    } catch (error) {
        return null;
    }
}

// Blob 转 Data URL 工具函数
function blobToDataURL(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(reader.error);

        // 判断是否为文本类型（可根据需要扩展更多MIME类型）
        const isText = isTextBlob(blob);

        if (isText) {
            reader.onload = () => {
                const text = reader.result as string;
                const encoded = encodeURIComponent(text);
                resolve(`data:${blob.type},${encoded}`);
            };
            reader.readAsText(blob);
        } else {
            reader.onload = () => resolve(reader.result as string);
            reader.readAsDataURL(blob);
        }
    });
}

function isTextMIME(mime: string) {
    const type = mime.toLowerCase();
    return type.startsWith('text/') || [
        'application/json',
        'application/xml',
        'application/javascript',
        'application/x-www-form-urlencoded'
    ].includes(type);
}

// 辅助函数判断文本类型
function isTextBlob(blob: Blob): boolean {
    return isTextMIME(blob.type);
}
//#endregion

//#region data url
function isDataURL(str: string) {
    return /^data\:([a-z]+\/[a-z0-9-+.]+)?(;base64)?,(.*)$/.test(str);
}
//#endregion

//#region assets
const stlsDeviceInfoId = "stlsDeviceInfo";
const stlsDeviceInfoIcon = "data:image/png;base64,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";
//#endregion

class stlsDeviceInfo {
    private runtime: any;
    constructor(runtime: any) {
        this.runtime = runtime;
    }
    getInfo() {
        return {
            id: stlsDeviceInfoId,
            name: i18n("stlsDeviceInfo.name"),
            blockIconURI: stlsDeviceInfoIcon,
            menuIconURI: stlsDeviceInfoIcon,
            color1: "#25C996",
            color2: "#1FAD81",
            blocks: [
                {
                    opcode: "getNavigator",
                    blockType: "reporter",
                    text: i18n("stlsDeviceInfo.getNavigator"),
                    disableMonitor: true,
                    arguments: {
                        state: {
                            type: "string",
                            menu: "clientState"
                        }
                    }
                },
                "---" + i18n("stlsDeviceInfo.title.dataURL"),
                {
                    opcode: "isDataURL",
                    blockType: "Boolean",
                    text: i18n("stlsDeviceInfo.isDataURL"),
                    arguments: {
                        str: {
                            type: "string",
                            defaultValue: "data:text/plain,Hello%2C%20world!"
                        }
                    }
                },
                {
                    opcode: "readDataURL",
                    blockType: "reporter",
                    text: i18n("stlsDeviceInfo.readDataURL"),
                    arguments: {
                        dataURL: {
                            type: "string",
                            defaultValue: "data:text/plain,Hello%2C%20world!"
                        },
                        part: {
                            type: "string",
                            menu: "dataURLParts"
                        }
                    }
                },
                {
                    opcode: "encodeDataURL",
                    blockType: "reporter",
                    text: i18n("stlsDeviceInfo.encodeDataURL"),
                    arguments: {
                        str: {
                            type: "string",
                            defaultValue: "Hello, world!"
                        },
                        mime: {
                            type: "string",
                            menu: "mime"
                        },
                        base64: {
                            type: "string",
                            menu: "yna"
                        }
                    }
                },
                {
                    opcode: "decodeDataURL",
                    blockType: "reporter",
                    text: i18n("stlsDeviceInfo.decodeDataURL"),
                    arguments: {
                        dataURL: {
                            type: "string",
                            defaultValue: "data:text/plain,Hello%2C%20world!"
                        }
                    }
                },
                "---" + i18n("stlsDeviceInfo.title.otherTools"),
                {
                    opcode: "getClipboard",
                    blockType: "reporter",
                    text: i18n("stlsDeviceInfo.getClipboard"),
                    tooltip: i18n("stlsDeviceInfo.tooltip.getClipboard"),
                    arguments: {
                        mime: {
                            type: "string",
                            menu: "mimeArray"
                        }
                    }
                },
            ],
            menus: {
                mimeArray: {
                    acceptReporters: true,
                    items: [
                        {
                            text: i18n("stlsDeviceInfo.mime.all"),
                            value: "undefined"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.textPlain"),
                            value: "[\"text/plain\"]"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.html"),
                            value: "[\"text/html\"]"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.css"),
                            value: "[\"text/css\"]"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.jpeg"),
                            value: "[\"image/jpeg\"]"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.png"),
                            value: "[\"image/png\"]"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.gif"),
                            value: "[\"image/gif\"]"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.mpeg"),
                            value: "[\"video/mpeg\"]"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.wav"),
                            value: "[\"audio/wav\"]"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.mp4"),
                            value: "[\"video/mp4\"]"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.avi"),
                            value: "[\"video/avi\"]"
                        }
                    ]
                },
                dataURLParts: [
                    {
                        text: i18n("stlsDeviceInfo.dataURLParts.header"),
                        value: "header"
                    },
                    {
                        text: i18n("stlsDeviceInfo.dataURLParts.type"),
                        value: "type"
                    },
                    {
                        text: i18n("stlsDeviceInfo.dataURLParts.data"),
                        value: "data"
                    }
                ],
                mime: {
                    acceptReporters: true,
                    items: [
                        {
                            text: i18n("stlsDeviceInfo.mime.textPlain"),
                            value: "text/plain"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.html"),
                            value: "text/html"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.css"),
                            value: "text/css"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.jpeg"),
                            value: "image/jpeg"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.png"),
                            value: "image/png"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.gif"),
                            value: "image/gif"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.mpeg"),
                            value: "video/mpeg"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.wav"),
                            value: "audio/wav"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.mp4"),
                            value: "video/mp4"
                        },
                        {
                            text: i18n("stlsDeviceInfo.mime.avi"),
                            value: "video/avi"
                        }
                    ]
                },
                yna: [
                    {
                        text: i18n("stlsDeviceInfo.yna.auto"),
                        value: "auto"
                    },
                    {
                        text: i18n("stlsDeviceInfo.yna.yes"),
                        value: "yes"
                    },
                    {
                        text: i18n("stlsDeviceInfo.yna.no"),
                        value: "no"
                    }
                ],
                clientState: [
                    {
                        text: i18n("stlsDeviceInfo.clientState.batteryLevel"),
                        value: "batteryLevel"
                    },
                    {
                        text: i18n("stlsDeviceInfo.clientState.deviceMemory"),
                        value: "deviceMemory"
                    },
                    {
                        text: i18n("stlsDeviceInfo.clientState.hardwareConcurrency"),
                        value: "hardwareConcurrency"
                    },
                    {
                        text: i18n("stlsDeviceInfo.clientState.languages"),
                        value: "languages"
                    },
                    {
                        text: i18n("stlsDeviceInfo.clientState.maxTouchPoints"),
                        value: "maxTouchPoints"
                    }
                ]
            }
        };
    }
    getClipboard(args: { mime: string }) {
        return readClipboard(strJsonToArr(args.mime));
    }
    isDataURL(args: { str: string }) {
        return isDataURL(args.str);
    }
    readDataURL(args: { dataURL: string; part: string }) {
        if (!isDataURL(args.dataURL)) return null;
        switch (args.part) {
            case "header":
                return args.dataURL.split(",")[0];
            case "type":
                let header = args.dataURL.split(",")[0];
                return header.includes(";") ? header.split(";")[0].substring(5) : header.substring(5);
            case "data":
                return args.dataURL.split(",")[1];
        }
    }
    encodeDataURL(args: { str: string, mime: string, base64: string }) {
        let base64 = args.base64 === "auto" ? isBase64(args.str) : args.base64 === "yes";
        if (base64)
            return `data:${args.mime};base64,${args.str}`;
        else
            return `data:${args.mime},${encodeURIComponent(args.str)}`;
    }
    decodeDataURL(args: { dataURL: string }) {
        if (!isDataURL(args.dataURL)) return null;
        let header = args.dataURL.split(",")[0];
        let mimeType = header.includes(";") ? header.split(";")[0].substring(5) : header.substring(5);
        if (!isTextMIME(mimeType)) return null;
        return header.includes(";base64") ? decodeBase64(args.dataURL.split(",")[1]) : decodeURIComponent(args.dataURL.split(",")[1]);
    }
    getNavigator(args: { state: string }) {
        switch (args.state) {
            case "batteryLevel":
                if (navigator.getBattery) {
                    try {
                        return navigator.getBattery().then((res: BatteryManager) => res.level);
                    } catch (e) {
                        return null;
                    }
                } else 
                    return null;
            case "deviceMemory":
                return navigator.deviceMemory ?? null;
            case "hardwareConcurrency":
                return navigator.hardwareConcurrency;
            case "languages":
                return JSON.stringify(navigator.languages);
            case "maxTouchPoints":
                return navigator.maxTouchPoints;
            default:
                return null;
        };
    }
}
extensions.register(new stlsDeviceInfo(runtime));
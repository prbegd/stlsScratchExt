const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

const strictPlugin = {
    name: "iife-strict",
    setup(build) {
        build.onEnd(async result => {
            if (!result.outputFiles) {
                console.error("无输出文件！")
            }

            result.outputFiles.forEach(file => {
                const text = file.text.replace(/\(\(\) ?=> ?{/, "(()=>{'use strict';");
                console.info("已添加'use strict';");

                const outputPath = path.resolve(process.cwd(), "../../build/BetterRandom.js"); // 根据实际路径调整
                fs.mkdirSync(path.dirname(outputPath), { recursive: true });
                fs.writeFileSync(outputPath, text);
                console.info("已写入文件。");
            });
        });
    }
};

esbuild.build({
    entryPoints: ["./BetterRandom.ts"],
    bundle: true,
    outfile: "../../build/BetterRandom.js",
    format: "iife",
    minify: true,
    charset: "utf8",
    banner: {
        js: "// 提示：本文件是编译后产物，不推荐阅读，请前往我的Github页面上查看源代码。https://github.com/prbegd/stlsScratchExt"
    },
    write: false,
    plugins: [strictPlugin]
}).catch(() => process.exit(1));
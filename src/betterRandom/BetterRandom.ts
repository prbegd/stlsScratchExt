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


import Long from "./libs/long.js";

class Int32 {
    private static cache = new Map<number, Int32>();

    static MIN_VALUE = Int32.from(-2147483648);
    static MAX_VALUE = Int32.from(2147483647);
    static NEG_ONE = Int32.from(-1);
    static ZERO = Int32.from(0);
    static ONE = Int32.from(1);

    private readonly value: number;

    private constructor(value: number) {
        this.value = value;
    }

    add(other: Int32 | number | UInt32): Int32 {
        if (typeof other === "number")
            return Int32.from(this.value + other);
        return Int32.from(this.value + other.valueOf());
    }
    sub(other: Int32 | number | UInt32): Int32 {
        if (typeof other === "number")
            return Int32.from(this.value - other);
        return Int32.from(this.value - other.valueOf());
    }
    mul(other: Int32 | number | UInt32): Int32 {
        if (typeof other === "number")
            return Int32.from(this.value * other);
        return Int32.from(this.value * other.valueOf());
    }
    div(other: Int32 | number | UInt32): Int32 {
        if (typeof other === "number")
            return Int32.from(this.value / other);
        return Int32.from(this.value / other.valueOf());
    }
    mod(other: Int32 | number | UInt32): Int32 {
        if (typeof other === "number")
            return Int32.from(this.value % other);
        return Int32.from(this.value % other.valueOf());
    }
    and(other: Int32 | number | UInt32): Int32 {
        if (typeof other === "number")
            return Int32.from(this.value & other);
        return Int32.from(this.value & other.valueOf());
    }
    or(other: Int32 | number | UInt32): Int32 {
        if (typeof other === "number")
            return Int32.from(this.value | other);
        return Int32.from(this.value | other.valueOf());
    }
    xor(other: Int32 | number | UInt32): Int32 {
        if (typeof other === "number")
            return Int32.from(this.value ^ other);
        return Int32.from(this.value ^ other.valueOf());
    }
    not(): Int32 {
        return Int32.from(~this.value);
    }
    shiftLeft(other: number): Int32 {
        return Int32.from(this.value << other);
    }
    shiftRight(other: number): Int32 {
        return Int32.from(this.value >> other);
    }
    shiftRightUnsigned(other: number): Int32 {
        return Int32.from(this.value >>> other);
    }
    equals(other: Int32 | number | UInt32): boolean {
        if (typeof other === "number")
            return this.value === other;
        return this.value === other.valueOf();
    }
    less(other: Int32 | number | UInt32): boolean {
        if (typeof other === "number")
            return this.value < other;
        return this.value < other.valueOf();
    }
    lessEqual(other: Int32 | number | UInt32): boolean {
        if (typeof other === "number")
            return this.value <= other;
        return this.value <= other.valueOf();
    }
    greater(other: Int32 | number | UInt32): boolean {
        if (typeof other === "number")
            return this.value > other;
        return this.value > other.valueOf();
    }
    greaterEqual(other: Int32 | number | UInt32): boolean {
        if (typeof other === "number")
            return this.value >= other;
        return this.value >= other.valueOf();
    }
    notEquals(other: Int32 | number | UInt32): boolean {
        if (typeof other === "number")
            return this.value !== other;
        return this.value !== other.valueOf();
    }
    toString(): string {
        return this.value.toString();
    }
    valueOf() {
        return this.value;
    }
    toUInt32(): UInt32 {
        return UInt32.from(this.value);
    }
    toJson(): number {
        return this.value;
    }
    static from(value: number | string | Int32): Int32 {
        if (value instanceof Int32)
            return value;

        const num = typeof value === "string" ? parseInt(value) : value;
        if (isNaN(num)) throw new TypeError("BetterRandom/Invalid Arguments:Int32.from():'value' must be an integer!");

        const finalValue = num | 0;

        if (Int32.cache.has(finalValue)) return Int32.cache.get(finalValue)!;
        const instance = new Int32(finalValue);
        if (Math.abs(num) < 100)
            Int32.cache.set(finalValue, instance);
        return instance;
    }
}
class UInt32 {
    private static cache = new Map<number, UInt32>();

    static MAX_VALUE = UInt32.from(0xFFFFFFFF);
    static ZERO = UInt32.from(0);
    static ONE = UInt32.from(1);

    private readonly value: number;

    private constructor(value: number) {
        this.value = value;
    }
    add(other: UInt32 | number | Int32): UInt32 {
        if (typeof other === "number")
            return UInt32.from(this.value + other);
        return UInt32.from(this.value + other.valueOf());
    }
    sub(other: UInt32 | number | Int32): UInt32 {
        if (typeof other === "number")
            return UInt32.from(this.value - other);
        return UInt32.from(this.value - other.valueOf());
    }
    mul(other: UInt32 | number | Int32): UInt32 {
        if (typeof other === "number")
            return UInt32.from(this.value * other);
        return UInt32.from(this.value * other.valueOf());
    }
    div(other: UInt32 | number | Int32): UInt32 {
        if (typeof other === "number")
            return UInt32.from(this.value / other);
        return UInt32.from(this.value / other.valueOf());
    }
    mod(other: UInt32 | number | Int32): UInt32 {
        if (typeof other === "number")
            return UInt32.from(this.value % other);
        return UInt32.from(this.value % other.valueOf());
    }
    and(other: UInt32 | number | Int32): UInt32 {
        if (typeof other === "number")
            return UInt32.from(this.value & other);
        return UInt32.from(this.value & other.valueOf());
    }
    or(other: UInt32 | number | Int32): UInt32 {
        if (typeof other === "number")
            return UInt32.from(this.value | other);
        return UInt32.from(this.value | other.valueOf());
    }
    xor(other: UInt32 | number | Int32): UInt32 {
        if (typeof other === "number")
            return UInt32.from(this.value ^ other);
        return UInt32.from(this.value ^ other.valueOf());
    }
    not(): UInt32 {
        return UInt32.from(~this.value);
    }
    shiftLeft(other: number): UInt32 {
        return UInt32.from(this.value << other);
    }
    shiftRight(other: number): UInt32 {
        return UInt32.from(this.value >> other);
    }
    shiftRightUnsigned(other: number): UInt32 {
        return UInt32.from(this.value >>> other);
    }
    equals(other: UInt32 | number | Int32): boolean {
        if (typeof other === "number")
            return this.value === other;
        return this.value === other.valueOf();
    }
    less(other: UInt32 | number | Int32): boolean {
        if (typeof other === "number")
            return this.value < other;
        return this.value < other.valueOf();
    }
    lessEqual(other: UInt32 | number | Int32): boolean {
        if (typeof other === "number")
            return this.value <= other;
        return this.value <= other.valueOf();
    }
    greater(other: UInt32 | number | Int32): boolean {
        if (typeof other === "number")
            return this.value > other;
        return this.value > other.valueOf();
    }
    greaterEqual(other: UInt32 | number | Int32): boolean {
        if (typeof other === "number")
            return this.value >= other;
        return this.value >= other.valueOf();
    }
    notEquals(other: UInt32 | number | Int32): boolean {
        if (typeof other === "number")
            return this.value !== other;
        return this.value !== other.valueOf();
    }
    toString(): string {
        return this.value.toString();
    }
    valueOf() {
        return this.value;
    }
    toInt32(): Int32 {
        return Int32.from(this.value);
    }
    toJson(): number {
        return this.value;
    }
    static from(value: number | string | UInt32): UInt32 {
        if (value instanceof UInt32)
            return value;

        const num = typeof value === "string" ? parseInt(value) : value;
        if (isNaN(num)) throw new TypeError("BetterRandom/Invalid Arguments:UInt32.from():'value' must be an integer!");

        const finalValue = num >>> 0;

        if (UInt32.cache.has(finalValue)) return UInt32.cache.get(finalValue)!;
        const instance = new UInt32(finalValue);
        if (num < 200)
            UInt32.cache.set(finalValue, instance);
        return instance;
    }
}
const mathUtil = {
    /**
     * 返回一个最接近num而且比num小的数
     */
    nextDown: function (num: number): number {
        if (Number.isNaN(num) || num == Number.NEGATIVE_INFINITY) return num;
        else {
            if (num === 0)
                return -Number.MAX_VALUE;
            else
                return num - Number.EPSILON;
        }
    },
    rotl: function (x: UInt32, k: number): UInt32 {
        return x.shiftLeft(k.valueOf()).or(x.shiftRight(32 - k));
    }
} as const;
const { ArgumentType, BlockType, TargetType, Cast, translate, extensions, runtime } = window.Scratch;
translate.setup({
    "zh-cn": {
        "stlsBetterRandom.name": "更好的随机数",
        "stlsBetterRandom.description": "支持自定义种子的伪随机数生成器!",
        "stlsBetterRandom.create": "创建随机数生成器 名称[name]种子[seed]使用随机算法[algorithm]",
        "stlsBetterRandom.createWithoutSeed": "创建随机数生成器 名称[name]使用随机算法[algorithm]",
        "stlsBetterRandom.delete": "删除随机数生成器[name]",
        "stlsBetterRandom.deleteAll": "删除所有随机数生成器",
        "stlsBetterRandom.setSeed": "设置随机数生成器[name]的种子为[seed]",
        "stlsBetterRandom.nextInt": "使用[name]生成随机整数",
        "stlsBetterRandom.nextIntBound": "使用[name]生成0-[max]的随机整数",
        "stlsBetterRandom.nextIntRange": "使用[name]生成[min]-[max]的随机整数",
        "stlsBetterRandom.nextFloat": "使用[name]生成0-1的随机小数",
        "stlsBetterRandom.nextFloatBound": "使用[name]生成0-[max]的随机小数",
        "stlsBetterRandom.nextFloatRange": "使用[name]生成[min]-[max]的随机小数",
        "stlsBetterRandom.nextBoolean": "使用[name]生成随机布尔值",

        "stlsBetterRandom.algorithms.LCG": "线性同余",
        "stlsBetterRandom.algorithms.MersenneTwister": "梅森旋转",

        "stlsBetterRandom.classes.xoshiro": "Xoshiro算法",

        "stlsBetterRandom.xoshiro.extra": "使用[name]调用功能[func]",

        "stlsBetterRandom.console.invalidAlgorithm": "更好的随机数/错误：非法算法",
        "stlsBetterRandom.console.seedMustBeInteger": "更好的随机数/错误：种子必须为整数！当前种子：",
        "stlsBetterRandom.console.seedArrayFormat": "更好的随机数/错误：种子必须是有效的字符串数组！当前传入：",
        "stlsBetterRandom.console.seedArraySize0": "更好的随机数/错误：种子数组大小应为",
        "stlsBetterRandom.console.seedArraySize1": "！当前大小：",
        "stlsBetterRandom.console.unsupportedExtra": "更好的随机数/错误：指定随机数生成器的算法不支持指定功能!",
        "stlsBetterRandom.console.invalidExtraFunction": "更好的随机数/错误：非法功能",

        "stlsBetterRandom.warnings.generatorNotFound": "错误：指定名称随机数生成器不存在!",
        "stlsBetterRandom.warnings.intBound": "错误：max必须为大于零的整数！",
        "stlsBetterRandom.warnings.intRange": "错误：min和max必须为整数，且min < max！",
        "stlsBetterRandom.warnings.floatBound": "错误：max必须大于零且小于正无穷大！",
        "stlsBetterRandom.warnings.floatRange": "错误：min必须小于max且两者都必须是有限数！",
        "stlsBetterRandom.warnings.int32": "错误：参数范围超过32位有符号整数范围！",
        "stlsBetterRandom.warnings.uint32": "错误：参数范围超过32位无符号整数范围！"
    },
    "en": {
        "stlsBetterRandom.name": "Better Random",
        "stlsBetterRandom.description": "Pseudo-random number generator with support for custom seeds!",
        "stlsBetterRandom.create": "Create random number generator name[name] seed[seed] use algorithm[algorithm]",
        "stlsBetterRandom.delete": "Delete random number generator[name]",
        "stlsBetterRandom.deleteAll": "Delete all random number generators",
        "stlsBetterRandom.setSeed": "Set the seed of random number generator[name] to[seed]",
        "stlsBetterRandom.nextInt": "Generate a random integer using[name]",
        "stlsBetterRandom.nextIntBound": "Generate a random integer from 0 to[max] using[name]",
        "stlsBetterRandom.nextIntRange": "Generate a random integer from[min] to[max] using[name]",
        "stlsBetterRandom.nextFloat": "Generate a random decimal from 0 to 1 using[name]",
        "stlsBetterRandom.nextFloatBound": "Generate a random decimal from 0 to[max] using[name]",
        "stlsBetterRandom.nextFloatRange": "Generate a random decimal from[min] to[max] using[name]",
        "stlsBetterRandom.nextBoolean": "Generate a random boolean value using[name]",

        "stlsBetterRandom.algorithms.LCG": "Linear Congruential Generator",
        "stlsBetterRandom.algorithms.MersenneTwister": "Mersenne Twister",

        "stlsBetterRandom.classes.xoshiro": "Xoshiro/Xoroshiro algorithm",

        "stlsBetterRandom.xoshiro.extra": "Call function [func] using [name]",

        "stlsBetterRandom.console.invalidAlgorithm": "Better Random/Error: Invalid algorithm",
        "stlsBetterRandom.console.seedMustBeInteger": "Better Random/Error: Seed must be an integer! Current seed: ",
        "stlsBetterRandom.console.seedArrayFormat": "Better Random/Error: The seed must be a valid array of strings! Currently passed in:",
        "stlsBetterRandom.console.seedArraySize0": "Better Random/Error: The size of the seed array should be ",
        "stlsBetterRandom.console.seedArraySize1": "! Current size: ",
        "stlsBetterRandom.console.unsupportedExtra": "Better Random/Error: The algorithm of the specified random number generator does not support the specified function!",
        "stlsBetterRandom.console.invalidExtraFunction": "Better Random/Error: Invalid function",

        "stlsBetterRandom.warnings.generatorNotFound": "Error: The specified name random number generator does not exist!",
        "stlsBetterRandom.warnings.intBound": "Error: max must be an integer greater than zero!",
        "stlsBetterRandom.warnings.intRange": "Error: min and max must be integers with min < max!",
        "stlsBetterRandom.warnings.floatBound": "Error: max must be greater than zero and less than positive infinity!",
        "stlsBetterRandom.warnings.floatRange": "Error: min must be less than max and both must be finite numbers!",
        "stlsBetterRandom.warnings.int32": "Error: The parameter range exceeds the 32-bit signed integer range!",
        "stlsBetterRandom.warnings.uint32": "Error: The parameter range exceeds the 32-bit unsigned integer range!"
    }
});
function i18n(key: string) {
    return translate({ id: key });
}
interface Scrambler {
    result: (state: Array<UInt32>) => UInt32;
}
const xoshiroResult = {
    // 使用泛型工厂函数保持类型关联
    plus: (w0: number, w1: number): Scrambler => ({
        result: (state) => state[w0].add(state[w1])
    }),

    plusplus: (r: number, w0: number, w1: number): Scrambler => ({
        result: (state) =>
            mathUtil.rotl(state[w0].add(state[w1]), r).add(state[w0])
    }),

    star: (s: number, w: number): Scrambler => ({
        result: (state) => state[w].mul(s)
    }),

    starstar: (s: number, r: number, t: number, w: number): Scrambler => ({
        result: (state) =>
            mathUtil.rotl(state[w].mul(s), r).mul(t)
    })
} as const;

const xoshiroUtil = {
    randomSeeds(size: number): Array<UInt32> {
        return Array.from({ length: size }, () => UInt32.from(Math.floor(Math.random() * 0xFFFFFFFF)));
    },

    arrStrToSeeds(str: string, expectedSeedsNumber: number): Array<UInt32> {
        if (!str)
            throw new InvalidSeedException(i18n("stlsBetterRandom.console.seedArrayFormat") + str);

        let result: Array<UInt32>;
        try {
            result = [UInt32.from(str)];
        } catch (_e) {
            try {
                const arr = JSON.parse(str);
                if (!arr.every((e) => Number.isInteger(e)))
                    throw new InvalidSeedException(i18n("stlsBetterRandom.console.seedMustBeInteger") + str);
                result = arr.map((e) => UInt32.from(e));
            } catch (_e) {
                throw new InvalidSeedException(i18n("stlsBetterRandom.console.seedArrayFormat") + str);
            }
        }

        if (result.length != expectedSeedsNumber)
            throw new InvalidSeedException(
                i18n("stlsBetterRandom.console.seedArraySize0")
                + expectedSeedsNumber
                + i18n("stlsBetterRandom.console.seedArraySize1")
                + result.length
            );

        return result;
    },

    xoshiro_4x32_plus: xoshiroResult.plus(0, 3),
    xoshiro_4x32_plus_plus: xoshiroResult.plusplus(7, 0, 3),
    xoshiro_4x32_star_star: xoshiroResult.starstar(5, 7, 9, 1),
    xoroshiro_2x32_star: xoshiroResult.star(0x9E3779BB, 0),
    xoroshiro_2x32_star_star: xoshiroResult.starstar(0x9E3779BB, 5, 5, 0)
} as const;
class InvalidSeedException extends Error {
    constructor(msg: string | undefined) {
        super(msg);
    }
}
// -------------------
/**
 * 抽象类，用于生成随机数
 */
interface stlsRandom {
    setSeed(seed?: any): void;
    nextInt(min?: number, max?: number): number;
    nextFloat(min?: number, max?: number): number;
    nextBoolean(): boolean;
}

class stlsLCGRandom implements stlsRandom {
    private static seedUniquifier = Long.fromString("8682522807148012");
    private static multiplier = Long.fromString("25214903917");
    private static addend = Long.fromNumber(11);
    private static mask = Long.fromNumber(1).shl(48).sub(1);
    private static FLOAT_UNIT = 1 / Long.fromNumber(1).shl(53).toNumber();
    private seed: Long;

    private static getSeedUniquifier(): Long {
        stlsLCGRandom.seedUniquifier = stlsLCGRandom.seedUniquifier.mul(Long.fromString("1181783497276652981"));
        return stlsLCGRandom.seedUniquifier;
    }

    private static initialScramble(seed: number): Long {
        return Long.fromNumber(seed).xor(stlsLCGRandom.multiplier).and(stlsLCGRandom.mask);
    }

    constructor(seed?: any) {
        if (seed === undefined)
            this.seed = stlsLCGRandom.getSeedUniquifier().xor(performance.now() * 1e6);
        else
            this.setSeed(seed);
    }

    setSeed(seed?: any): void {
        if (!Number.isInteger(seed))
            throw new InvalidSeedException(i18n("stlsBetterRandom.console.seedMustBeInteger") + seed)
        this.seed = stlsLCGRandom.initialScramble(seed);
    }

    private next(bits: number): Int32 {
        // 复制seed，防止修改原始的seed值。
        const oldSeed = Long.fromValue(this.seed);
        this.seed = oldSeed.mul(stlsLCGRandom.multiplier).add(stlsLCGRandom.addend).and(stlsLCGRandom.mask);
        return Int32.from(Long.fromValue(this.seed).shru(48 - bits).toNumber());
    }

    nextInt(min?: number, max?: number): number {
        let result: Int32;
        if (max === undefined)
            result = min === undefined ? this.nextInt0() : this.nextInt1(Int32.from(min));
        else
            result = this.nextInt2(Int32.from(min as number), Int32.from(max));


        return result.valueOf();
    }

    private nextInt0(): Int32 {
        return this.next(32);
    }

    private nextInt1(max: Int32): Int32 {
        if (max.lessEqual(0))
            return i18n(`stlsBetterRandom.warnings.intBound`);

        let r: Int32 = this.next(31);
        const m: Int32 = Int32.from(max.sub(1));
        if (max.and(m).equals(0))
            r = Int32.from(Long.fromNumber(r.valueOf()).mul(max.valueOf()).shr(31).toNumber());
        else {
            for (let u: Int32 = r;
                u.sub(r = u.mod(max)).add(m).less(0);
                u = this.next(31))
                ;
        }
        return r;
    }

    private nextInt2(min: Int32, max: Int32): Int32 {
        if (min.greaterEqual(max))
            return i18n(`stlsBetterRandom.warnings.intRange`);

        let r: Int32 = this.nextInt0();
        const n: Int32 = max.sub(min);
        const m: Int32 = n.sub(1);
        if (n.and(m).equals(0)) {
            r = (r.and(m)).add(min);
        } else {
            let u: Int32;
            do {
                r = this.nextInt0();
                u = r.shiftRightUnsigned(1);
                r = u.mod(n);
            } while (u.add(m).sub(r).less(0));
            r = r.add(min);
        }
        return r;
    }

    nextFloat(min?: number, max?: number): number {
        if (max === undefined) {
            return min === undefined ? this.nextFloat0() : this.nextFloat1(min);
        }
        return this.nextFloat2(min as number, max);
    }

    private nextFloat0(): number {
        return Long.fromNumber(this.next(26).valueOf()).shl(27).add(this.next(27).valueOf()).toNumber() * stlsLCGRandom.FLOAT_UNIT;
    }

    private nextFloat1(max: number): number {
        if (!(0 < max && max < Number.POSITIVE_INFINITY))
            return i18n(`stlsBetterRandom.warnings.floatBound`);

        const r = this.nextFloat0() * max;
        return r >= max ? mathUtil.nextDown(max) : r;
    }

    private nextFloat2(min: number, max: number): number {
        if (!(Number.NEGATIVE_INFINITY < min && min < max && max < Number.POSITIVE_INFINITY))
            return i18n(`stlsBetterRandom.warnings.floatRange`);

        const range = max - min;
        const r = this.nextFloat0() * range + min;
        return r >= max ? mathUtil.nextDown(max) : r;
    }

    nextBoolean() {
        return this.next(1).notEquals(1);
    }
}
class stlsMersenneTwisterRandom implements stlsRandom {
    private static N = 624 as const;
    private static M = 397 as const;
    private static MATRIX_A = 0x9908b0df as const;
    private static UPPER_MASK = 0x80000000 as const;
    private static LOWER_MASK = 0x7fffffff as const;
    private mt: UInt32[];
    private index: Int32;

    constructor(seed?: any) {
        this.mt = new Array(stlsMersenneTwisterRandom.N);
        this.setSeed(seed);
        this.index = Int32.from(stlsMersenneTwisterRandom.N);
    }

    setSeed(seed?: any) {
        if (!Number.isInteger(seed))
            throw new InvalidSeedException(i18n("stlsBetterRandom.console.seedMustBeInteger") + seed)
        this.mt[0] = UInt32.from(seed || Date.now());
        for (this.index = Int32.from(1); this.index.less(stlsMersenneTwisterRandom.N); this.index = this.index.add(1)) {
            const s = this.mt[this.index.sub(1).valueOf()].xor(this.mt[this.index.sub(1).valueOf()].shiftRightUnsigned(30));
            this.mt[this.index.valueOf()] = (((((s.and(0xffff0000)).shiftRightUnsigned(16)).mul(1812433253)).shiftLeft(16)).add(s.and(0x0000ffff)).mul(1812433253)).add(this.index);
        }
    }

    private twist() {
        for (let i = 0; i < stlsMersenneTwisterRandom.N; i++) {
            const x = this.mt[i].and(stlsMersenneTwisterRandom.UPPER_MASK)
                .add(this.mt[(i + 1) % stlsMersenneTwisterRandom.N].and(stlsMersenneTwisterRandom.LOWER_MASK));
            let xA = x.shiftRightUnsigned(1);
            if (x.mod(2).notEquals(0)) {
                xA = xA.xor(stlsMersenneTwisterRandom.MATRIX_A);
            }
            this.mt[i] = this.mt[(i + stlsMersenneTwisterRandom.M) % (stlsMersenneTwisterRandom.N)].xor(xA);
        }
        this.index = Int32.from(0);
    }

    private next(): UInt32 {
        if (this.index.greaterEqual(stlsMersenneTwisterRandom.N)) {
            this.twist();
        }

        const currentIndex = this.index.valueOf();
        this.index = this.index.add(1);
        let y = this.mt[currentIndex];
        y = y.xor(y.shiftRightUnsigned(11));
        y = y.xor((y.shiftLeft(7)).and(0x9d2c5680));
        y = y.xor((y.shiftLeft(15)).and(0xefc60000));
        y = y.xor(y.shiftRightUnsigned(18));

        return y;
    }
    nextInt(min?: number, max?: number): number {
        if (max === undefined) {
            if (min === undefined) {
                return this.next().valueOf(); // 如果没有传入任何参数，返回一个随机整数
            }
            // 注意: 此处的min代表max
            if (!Number.isInteger(min) || min <= 0)
                return i18n(`stlsBetterRandom.warnings.intBound`);
            return this.next().mod(UInt32.from(min)).valueOf(); // 返回 [0, max) 范围内的整数
        }
        if (!Number.isInteger(min) || !Number.isInteger(max) || min as number >= max)
            return i18n(`stlsBetterRandom.warnings.intRange`);
        let bound = max - (min as number); // 计算范围
        if (bound >= UInt32.MAX_VALUE.valueOf()) // 处理边界情况，避免溢出
            return i18n(`stlsBetterRandom.warnings.uint32`);

        return min as number + (this.next().mod(bound).valueOf()); // 返回 [min, max) 范围内的整数
    }

    nextFloat(min?: number, max?: number) {
        if (max === undefined) {
            if (min === undefined) {
                return this.next().valueOf() * (1.0 / 4294967296.0); // 默认返回 [0, 1) 范围内的浮点数
            }
            // 注意: 此处的min代表max
            if (!(0 < min && min < Number.POSITIVE_INFINITY))
                return i18n(`stlsBetterRandom.warnings.floatBound`);
            return this.next().valueOf() * (1.0 / 4294967296.0) * min; // 返回 [0, max) 范围内的浮点数
        }
        if (!(Number.NEGATIVE_INFINITY < (min as number) && (min as number) < max && max < Number.POSITIVE_INFINITY))
            return i18n(`stlsBetterRandom.warnings.floatRange`);
        return min as number + (this.next().valueOf() * (1.0 / 4294967296.0) * (max - (min as number))); // 返回 [min, max) 范围内的浮点数
    }

    nextBoolean() {
        return this.next().mod(2).equals(0);
    }
}
class stlsXorshiftRandom implements stlsRandom {
    private seed: UInt32;
    constructor(seed?: any) {
        // 初始化种子
        this.setSeed(seed || Date.now() % 2147483647); // 使用当前时间作为种子
    }
    // 设置种子的方法
    setSeed(seed?: any) {
        if (!Number.isInteger(seed))
            throw new InvalidSeedException(i18n("stlsBetterRandom.console.seedMustBeInteger") + seed)
        this.seed = UInt32.from(seed);
    }

    // Xorshift 算法
    private next() {
        this.seed = this.seed.xor(this.seed.shiftLeft(13));
        this.seed = this.seed.xor(this.seed.shiftRightUnsigned(17));
        this.seed = this.seed.xor(this.seed.shiftLeft(5));
        return this.seed;
    }

    nextInt(min?: number, max?: number): number {
        if (min === undefined && max === undefined) {
            return this.next().valueOf(); // 如果没有参数，返回随机整数
        }
        // 如果max未传入, 则返回[0, min)的随机整数
        if (max === undefined) {
            if (!Number.isInteger(min) || min as number <= 0)
                return i18n(`stlsBetterRandom.warnings.intBound`);
            return this.next().mod(UInt32.from(min as number)).valueOf(); // 处理负值情况
        }
        // 返回[min, max) 的随机整数，确保返回值在正确范围内
        if (!Number.isInteger(min) || !Number.isInteger(max) || min as number >= max)
            return i18n(`stlsBetterRandom.warnings.intRange`);
        let bound = max - (min as number); // 计算范围
        if (bound >= UInt32.MAX_VALUE.valueOf()) // 处理边界情况，避免溢出
            return i18n(`stlsBetterRandom.warnings.uint32`);

        return min as number + this.next().mod(bound).valueOf();
    }

    nextFloat(min?: number, max?: number): number {
        // 生成一个范围在 [0, 1) 之间的随机浮点数
        const randomFloat = this.next().valueOf() / UInt32.MAX_VALUE.valueOf();
        if (max === undefined) {
            if (min === undefined) { // max和min都缺省，返回[0, 1)的随机浮点数
                return randomFloat;
            }
            // 只传入min，将min当做最大值，返回[0, min)的随机浮点数
            if (!(0 < min && min < Number.POSITIVE_INFINITY))
                return i18n(`stlsBetterRandom.warnings.floatBound`);
            return min * randomFloat;
        }
        // 根据 min 和 max 调整范围
        if (!(Number.NEGATIVE_INFINITY < (min as number) && min as number < max && max < Number.POSITIVE_INFINITY))
            return i18n(`stlsBetterRandom.warnings.floatRange`);
        return min as number + randomFloat * (max - (min as number));
    }

    nextBoolean() {
        return this.next().and(1).equals(0); // 返回随机布尔值
    }
}
class stlsXoshiro128Random implements stlsRandom {
    private state: [UInt32, UInt32, UInt32, UInt32];
    private scrambler: Scrambler;

    constructor(scrambler: Scrambler, seedStr?: any) {
        this.scrambler = scrambler;
        this.setSeed(seedStr);
    }
    setSeed(seedStr?: any) {
        if (typeof seedStr !== "string" && seedStr !== undefined)
            throw new InvalidSeedException(i18n("stlsBetterRandom.console.seedMustBeString") + seedStr);
        this.state = (seedStr ? xoshiroUtil.arrStrToSeeds(seedStr, 4) : xoshiroUtil.randomSeeds(4)) as [UInt32, UInt32, UInt32, UInt32];
    }
    private next() {
        const result = this.scrambler.result(this.state);
        const t = this.state[1].shiftLeft(9);

        this.state[2] = this.state[2].xor(this.state[0]);
        this.state[3] = this.state[3].xor(this.state[1]);
        this.state[1] = this.state[1].xor(this.state[2]);
        this.state[0] = this.state[0].xor(this.state[3]);

        this.state[2] = this.state[2].xor(t);

        this.state[3] = mathUtil.rotl(this.state[3], 11);

        return result;
    }
    nextInt(min?: number, max?: number): number {
        if (min === undefined && max === undefined) {
            return this.next().valueOf(); // 如果没有参数，返回随机整数
        }
        // 如果max未传入, 则返回[0, min)的随机整数
        if (max === undefined) {
            if (!Number.isInteger(min) || min as number <= 0)
                return i18n(`stlsBetterRandom.warnings.intBound`);
            return this.next().mod(UInt32.from(min as number)).valueOf(); // 处理负值情况
        }
        // 返回[min, max) 的随机整数，确保返回值在正确范围内
        if (!Number.isInteger(min) || !Number.isInteger(max) || min as number >= max)
            return i18n(`stlsBetterRandom.warnings.intRange`);
        let bound = max - (min as number); // 计算范围
        if (bound >= UInt32.MAX_VALUE.valueOf()) // 处理边界情况，避免溢出
            return i18n(`stlsBetterRandom.warnings.uint32`);

        return min as number + this.next().mod(bound).valueOf();
    }

    nextFloat(min?: number, max?: number): number {
        // 生成一个范围在 [0, 1) 之间的随机浮点数
        const randomFloat = this.next().valueOf() / UInt32.MAX_VALUE.valueOf();
        if (max === undefined) {
            if (min === undefined) { // max和min都缺省，返回[0, 1)的随机浮点数
                return randomFloat;
            }
            // 只传入min，将min当做最大值，返回[0, min)的随机浮点数
            if (!(0 < min && min < Number.POSITIVE_INFINITY))
                return i18n(`stlsBetterRandom.warnings.floatBound`);
            return min * randomFloat;
        }
        // 根据 min 和 max 调整范围
        if (!(Number.NEGATIVE_INFINITY < (min as number) && min as number < max && max < Number.POSITIVE_INFINITY))
            return i18n(`stlsBetterRandom.warnings.floatRange`);
        return min as number + randomFloat * (max - (min as number));
    }

    nextBoolean() {
        return this.next().and(1).equals(0); // 返回随机布尔值
    }

    static #JUMP = [0x8764000b, 0xf542d2d3, 0x6fa035c3, 0x77f2db5b];
    jump() {
        let s0 = UInt32.ZERO;
        let s1 = UInt32.ZERO;
        let s2 = UInt32.ZERO;
        let s3 = UInt32.ZERO;
        for (let i = 0; i < stlsXoshiro128Random.#JUMP.length; i++) {
            for (let b = 0; b < 32; b++) {
                if (stlsXoshiro128Random.#JUMP[i] & 1 << b) {
                    s0 = s0.xor(this.state[0]);
                    s1 = s1.xor(this.state[1]);
                    s2 = s2.xor(this.state[2]);
                    s3 = s3.xor(this.state[3]);
                }
                this.next();
            }
        }
        this.state[0] = s0;
        this.state[1] = s1;
        this.state[2] = s2;
        this.state[3] = s3;
    }
    static #LONG_JUMP = [0xb523952e, 0x0b6f099f, 0xccf5a0ef, 0x1c580662];
    long_jump() {
        let s0 = UInt32.ZERO;
        let s1 = UInt32.ZERO;
        let s2 = UInt32.ZERO;
        let s3 = UInt32.ZERO;
        for (let i = 0; i < stlsXoshiro128Random.#LONG_JUMP.length; i++) {
            for (let b = 0; b < 32; b++) {
                if (stlsXoshiro128Random.#LONG_JUMP[i] & 1 << b) {
                    s0 = s0.xor(this.state[0]);
                    s1 = s1.xor(this.state[1]);
                    s2 = s2.xor(this.state[2]);
                    s3 = s3.xor(this.state[3]);
                }
                this.next();
            }
        }
        this.state[0] = s0;
        this.state[1] = s1;
        this.state[2] = s2;
        this.state[3] = s3;
    }
}
class stlsXoroshiro64Random implements stlsRandom {
    private state: [UInt32, UInt32];
    private scrambler: Scrambler;
    constructor(scrambler: Scrambler, seed?: any) {
        this.scrambler = scrambler;
        this.setSeed(seed);
    }
    setSeed(seedStr?: any) {
        if (typeof seedStr !== "string" && seedStr !== undefined)
            throw new InvalidSeedException(i18n("stlsBetterRandom.console.seedMustBeString") + seedStr);
        this.state = (seedStr ? xoshiroUtil.arrStrToSeeds(seedStr, 2) : xoshiroUtil.randomSeeds(2)) as [UInt32, UInt32];
    }
    private next() {
        const s0 = this.state[0];
        let s1 = this.state[1];
        const result = this.scrambler.result(this.state);

        s1 = s1.xor(s0);
        this.state[0] = mathUtil.rotl(s0, 26).xor(s1).xor(s1.shiftLeft(9)); // a, b
        this.state[1] = mathUtil.rotl(s1, 13); // c

        return result;
    }
    nextInt(min?: number, max?: number): number {
        if (min === undefined && max === undefined) {
            return this.next().valueOf(); // 如果没有参数，返回随机整数
        }
        // 如果max未传入, 则返回[0, min)的随机整数
        if (max === undefined) {
            if (!Number.isInteger(min) || min as number <= 0)
                return i18n(`stlsBetterRandom.warnings.intBound`);
            return this.next().mod(UInt32.from(min as number)).valueOf(); // 处理负值情况
        }
        // 返回[min, max) 的随机整数，确保返回值在正确范围内
        if (!Number.isInteger(min) || !Number.isInteger(max) || min as number >= max)
            return i18n(`stlsBetterRandom.warnings.intRange`);
        let bound = max - (min as number); // 计算范围
        if (bound >= UInt32.MAX_VALUE.valueOf()) // 处理边界情况，避免溢出
            return i18n(`stlsBetterRandom.warnings.uint32`);

        return min as number + this.next().mod(bound).valueOf();
    }

    nextFloat(min?: number, max?: number): number {
        // 生成一个范围在 [0, 1) 之间的随机浮点数
        const randomFloat = this.next().valueOf() / UInt32.MAX_VALUE.valueOf();
        if (max === undefined) {
            if (min === undefined) { // max和min都缺省，返回[0, 1)的随机浮点数
                return randomFloat;
            }
            // 只传入min，将min当做最大值，返回[0, min)的随机浮点数
            if (!(0 < min && min < Number.POSITIVE_INFINITY))
                return i18n(`stlsBetterRandom.warnings.floatBound`);
            return min * randomFloat;
        }
        // 根据 min 和 max 调整范围
        if (!(Number.NEGATIVE_INFINITY < (min as number) && min as number < max && max < Number.POSITIVE_INFINITY))
            return i18n(`stlsBetterRandom.warnings.floatRange`);
        return min as number + randomFloat * (max - (min as number));
    }

    nextBoolean() {
        return this.next().and(1).equals(0); // 返回随机布尔值
    }
}
// --------------- 扩展部分 --------------
const stlsBetterRandomID = "stlsBetterRandom";
const stlsBetterRandomIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAC9CAQAAABM3rS7AAAACXBIWXMAAAsTAAALEwEAmpwYAAADGWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBA3y7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BUNTVQYqg4jIKAX08EGIIUByaVEZhMXIwMDAIMCgxeDHUMmwiuEBozRjFOM8xqdMhkwNTJeYNZgbme+y2LDMY2VmzWa9yubEtoldhX0mhwBHJycrZzMXM1cbNzf3RB4pnqW8xryH+IL5nvFXCwgJrBZ0E3wk1CisKHxYJF2UV3SrWJw4p/hWiRRJYcmjUhXSutJPZObIhsoJyp2V71HwUeRVvKA0RTlKRUnltepWtUZ1Pw1Zjbea+7QmaqfqWOsK6b7SO6I/36DGMMrI0ljS+LfJPdPDZivM+y0qLBOtfKwtbFRtRexY7L7aP3e47XjB6ZjzXpetruvdVrov9VjkudBrgfdCn8W+y/xW+a8P2Bq4N+hY8PmQW6HPwr5EMEUKRilFG8e4xUbF5cW3JMxO3Jx0Nvl5KlOaXLpNRlRmVdas7D059/KY8tULfAqLi2YXHy55WyZR7lJRWDmv6mz131q9uvj6SQ3HGn83G7Skt85ru94h2Ond1d59uJehz76/bsK+if8nO05pnXpiOu+M4JmzZj2aozW3ZN6+BVwLwxYtXvxxqcOyCcsfrjRe1br65lrddU3rb2402NSx+cFWq21Tt3/Y6btr1R6Oven7jh9QP9h56PURv6Obj4ufqD355LT3mS3nZM+3X/h0Ke7yqasW15bdEL3ZeuvrnfS7N+/7PDjwyPTx6qeKz2a+EHzZ9Zr5Td3bn+9LP3z6VPD53de8b+9+5P/88Lv4z7d/Vf//AwAqvx2K829RWwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAD1ElEQVR42uzdu3LzIBCGYdC4dp1rokit+S8w49oF15Q6N7ApLOuPPT6ABCyH96syKXx4tFoQFrYVQ3QyQQA99AR66An00BPooSfQQ0+gh55ADz2BHnroCfTQE+ihJ9BDT6CHnkAPPYEeegI99AR66KEn0ENPoIeeQA89gR56Aj30BHroCfTQQ0+gh55ADz2BHnqSIIdB3/f/b1a1VL0O/O3f0Bc/EAH8J+gLnAdUfe/40KvhQx/d9aFvvvahV8OHXg0ferWuf6iyamwVVSp5FxkOFZ/wVr01ZMWfmj7ppVARDNnrRX0OLqPSP3vrUsXh736GI32+giYml160D4aXQend7VuXPiq/kUsq1+FVWzNXs2vdK9S8H30h4SR68D9j0x91zrYrvB2U3psPnZnNAj/bgav+W2GozQmfa/nMxs+E3Zua/044LLrgx8gHn3HlMm5gOhr/EiS85v3bZz9G1Hs++Iz0m16y7K35QDLRbDTZ6Tc2KnkM76Lg95GVgW9imO0Tvr5Pqe7qPrzZpCDLP7TWTH+H/xExwKaAzz201k1/V/Muol5TwM/F7revkX6p+/hm00ajqbvqrZdyzaZ0o6m84Th7EpOv2azjiU69V97rZ2uClss2Nht7XejQqPf6h9nAVaBtNXs5r7TYq5/h5J3ZzFb3tU891HybObQMv6PmZR1wqfptF1wbPzaUP38JVR9d8+u8f+/9wKJT+1Or8N78mfdLiWek4ZhHiwx+Pz77ZiObzXWWnuKuSPbNRjabFb/chLZP+qClgycrmpLk+QfdN7up2SSv2gH3zcbPbJrGn9qCN+8/PmkGf2oL3ocMqJKkY2fv+nVuWY4dYPMNuoPum32Q4je9CvQm194OPfymqv6nK/yprZp3th/8qR34peZV8IfdN3t3Z1gnld9I1evcKTPOQsLLLn8Db6Ev2+WNFv6QW5Zf3P9rlQ9+pQsJCWvtRZe3Xlyx15D+UB/qRX9/P6Rb7px02et9tqdGqt7unQlfT/B3sxpnjfES24tL7s0qTP/PGPO58zHO1hhjznf//XrCv3x5RVCOVcBnbDjnwhPAKKKAfbP5ryVG/a2SwA6f83mgL95oGltI6A+eqi/e4aFX6/DQKzYaer0yPFWvuHN2TPr1qwCM0ds5m4X+a1lMqBn/ssakt2HZGJvrNpOc9J9pHib8tyEuB6gVesIMB3oCPfQEeuihJ9BDT6CHnkAPPYEeegI99AR66An00ENPoIeeQA89gR56Aj30BHroCfTQE+ihJ9BDDz2BHnoCPfQEeugJ9NAT6KEn0ENPoK8hvwMAxekce8QQGoUAAAAASUVORK5CYII=";

class stlsBetterRandom {
    private runtime: any;
    private randomGenerators: Map<string, stlsRandom>;
    constructor(runtime: any) {
        this.runtime = runtime;
        this.randomGenerators = new Map();
    }
    getInfo() {
        return {
            id: stlsBetterRandomID,
            name: i18n("stlsBetterRandom.name"),
            blockIconURI: stlsBetterRandomIcon,
            menuIconURI: stlsBetterRandomIcon,
            color1: "#8E44AD",
            color2: "#A569BD",
            blocks: [
                {
                    opcode: "create",
                    blockType: "command",
                    text: i18n("stlsBetterRandom.create"),
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "r"
                        },
                        seed: {
                            type: "string",
                            defaultValue: "114514"
                        },
                        algorithm: {
                            type: "string",
                            menu: "algorithms"
                        }
                    }
                },
                {
                    opcode: "createWithoutSeed",
                    blockType: "command",
                    text: i18n("stlsBetterRandom.createWithoutSeed"),
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "r"
                        },
                        algorithm: {
                            type: "string",
                            menu: "algorithms"
                        }
                    }
                },
                {
                    opcode: "delete",
                    blockType: "command",
                    text: i18n("stlsBetterRandom.delete"),
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "r"
                        }
                    }
                },
                {
                    opcode: "deleteAll",
                    blockType: "command",
                    text: i18n("stlsBetterRandom.deleteAll")
                },
                {
                    opcode: "setSeed",
                    blockType: "command",
                    text: i18n("stlsBetterRandom.setSeed"),
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "r"
                        },
                        seed: {
                            type: "string",
                            defaultValue: "1919810"
                        }
                    }
                },
                {
                    opcode: "nextInt",
                    blockType: "reporter",
                    text: i18n("stlsBetterRandom.nextInt"),
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "r"
                        }
                    }
                },
                {
                    opcode: "nextIntBound",
                    blockType: "reporter",
                    text: i18n("stlsBetterRandom.nextIntBound"),
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "r"
                        },
                        max: {
                            type: "number",
                            defaultValue: "114"
                        }
                    }
                },
                {
                    opcode: "nextIntRange",
                    blockType: "reporter",
                    text: i18n("stlsBetterRandom.nextIntRange"),
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "r"

                        },
                        min: {
                            type: "number",
                            defaultValue: "114"
                        },
                        max: {
                            type: "number",
                            defaultValue: "514"
                        }
                    }
                },
                {
                    opcode: "nextFloat",
                    blockType: "reporter",
                    text: i18n("stlsBetterRandom.nextFloat"),
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "r"
                        }
                    }
                },
                {
                    opcode: "nextFloatBound",
                    blockType: "reporter",
                    text: i18n("stlsBetterRandom.nextFloatBound"),
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "r"
                        },
                        max: {
                            type: "number",
                            defaultValue: "1.919"
                        }
                    }
                },
                {
                    opcode: "nextFloatRange",
                    blockType: "reporter",
                    text: i18n("stlsBetterRandom.nextFloatRange"),
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "r"
                        },
                        min: {
                            type: "number",
                            defaultValue: "1.919"
                        },
                        max: {
                            type: "number",
                            defaultValue: "8.1"
                        }
                    }
                },
                {
                    opcode: "nextBoolean",
                    blockType: "Boolean",
                    text: i18n("stlsBetterRandom.nextBoolean"),
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "r"
                        }
                    }
                },
                "---" + i18n("stlsBetterRandom.classes.xoshiro"),
                {
                    opcode: "xoshiroExtra",
                    blockType: "command",
                    text: i18n("stlsBetterRandom.xoshiro.extra"),
                    arguments: {
                        name: {
                            type: 'string',
                            defaultValue: "r"
                        },
                        func: {
                            type: "string",
                            menu: "xoshiroExtraFuncs"
                        }
                    }
                }
            ],
            menus: {
                algorithms: [
                    {
                        text: i18n("stlsBetterRandom.algorithms.LCG"),
                        value: "LCG"
                    },
                    {
                        text: i18n("stlsBetterRandom.algorithms.MersenneTwister"),
                        value: "MersenneTwister"
                    },
                    {
                        text: "Xorshift",
                        value: "Xorshift"
                    },
                    {
                        text: "Xoshiro128+",
                        value: "Xoshiro128p"
                    },
                    {
                        text: "Xoshiro128++",
                        value: "Xoshiro128pp"
                    },
                    {
                        text: "Xoshiro128**",
                        value: "Xoshiro128ss"
                    },
                    {
                        text: "Xoroshiro64*",
                        value: "Xoroshiro64s"
                    },
                    {
                        text: "Xoroshiro64**",
                        value: "Xoroshiro64ss"
                    }
                ],
                xoshiroExtraFuncs: ['jump', "long_jump"]
            }
        };
    }
    create(args: { seed: any; algorithm: string; name: any; }) {
        try {
            const seed = args.seed;
            let generator: stlsRandom;
            switch (args.algorithm) {
                case "LCG":
                    generator = new stlsLCGRandom(seed);
                    break;
                case "MersenneTwister":
                    generator = new stlsMersenneTwisterRandom(seed);
                    break;
                case "Xorshift":
                    generator = new stlsXorshiftRandom(seed);
                    break;
                case "Xoshiro128p":
                    generator = new stlsXoshiro128Random(xoshiroUtil.xoshiro_4x32_plus, seed);
                    break;
                case "Xoshiro128pp":
                    generator = new stlsXoshiro128Random(xoshiroUtil.xoshiro_4x32_plus_plus, seed);
                    break;
                case "Xoshiro128ss":
                    generator = new stlsXoshiro128Random(xoshiroUtil.xoshiro_4x32_star_star, seed);
                    break;
                case "Xoroshiro64s":
                    generator = new stlsXoroshiro64Random(xoshiroUtil.xoroshiro_2x32_star, seed);
                    break;
                case "Xoroshiro64ss":
                    generator = new stlsXoroshiro64Random(xoshiroUtil.xoroshiro_2x32_star_star, seed);
                    break;
                default:
                    console.warn(i18n("stlsBetterRandom.console.invalidAlgorithm") + "(" + args.algorithm + ")");
                    return;
            }
            this.randomGenerators.set(args.name, generator);
        } catch (e) {
            if (!(e instanceof InvalidSeedException)) throw e;
            console.warn(e.message);
        }
    }
    createWithoutSeed(args: { algorithm: string; name: any; }) {
        let generator;
        switch (args.algorithm) {
            case "LCG":
                generator = new stlsLCGRandom();
                break;
            case "MersenneTwister":
                generator = new stlsMersenneTwisterRandom();
                break;
            case "Xorshift":
                generator = new stlsXorshiftRandom();
                break;
            case "Xoshiro128p":
                generator = new stlsXoshiro128Random(xoshiroUtil.xoshiro_4x32_plus);
                break;
            case "Xoshiro128pp":
                generator = new stlsXoshiro128Random(xoshiroUtil.xoshiro_4x32_plus_plus);
                break;
            case "Xoshiro128ss":
                generator = new stlsXoshiro128Random(xoshiroUtil.xoshiro_4x32_star_star);
                break;
            case "Xoroshiro64s":
                generator = new stlsXoroshiro64Random(xoshiroUtil.xoroshiro_2x32_star);
                break;
            case "Xoroshiro64ss":
                generator = new stlsXoroshiro64Random(xoshiroUtil.xoroshiro_2x32_star_star);
                break;
            default:
                console.warn(i18n("stlsBetterRandom.console.invalidAlgorithm") + "(" + args.algorithm + ")");
                return;
        }
        this.randomGenerators.set(args.name, generator);
    }
    delete(args: { name: any; }) {
        this.randomGenerators.delete(args.name);
    }
    deleteAll() {
        this.randomGenerators = new Map();
    }
    setSeed(args: { seed: any; name: any; }) {
        try {
            const seed = args.seed;
            const generator = this.randomGenerators.get(args.name);
            if (generator) {
                generator.setSeed(seed);
            } else {
                console.warn(i18n("stlsBetterRandom.warnings.generatorNotFound"));
            }
        } catch (e) {
            if (!(e instanceof InvalidSeedException)) throw e;
            console.warn(e.message);
        }
    }
    nextInt(args: { name: any; }) {
        const generator = this.randomGenerators.get(args.name);
        if (generator) {
            return generator.nextInt();
        } else {
            return i18n("stlsBetterRandom.warnings.generatorNotFound");
        }
    }
    nextIntBound(args: { name: any; max: any; }) {
        const generator = this.randomGenerators.get(args.name);
        if (generator) {
            return generator.nextInt(args.max);
        } else {
            return i18n("stlsBetterRandom.warnings.generatorNotFound");
        }
    }
    nextIntRange(args: { name: any; min: any; max: any; }) {
        const generator = this.randomGenerators.get(args.name);
        if (generator) {
            return generator.nextInt(args.min, args.max);
        } else {
            return i18n("stlsBetterRandom.warnings.generatorNotFound");
        }
    }
    nextFloat(args: { name: any; }) {
        const generator = this.randomGenerators.get(args.name);
        if (generator) {
            return generator.nextFloat();
        } else {
            return i18n("stlsBetterRandom.warnings.generatorNotFound");
        }
    }
    nextFloatBound(args: { name: any; max: any; }) {
        const generator = this.randomGenerators.get(args.name);
        if (generator) {
            return generator.nextFloat(args.max);
        } else {
            return i18n("stlsBetterRandom.warnings.generatorNotFound");
        }
    }
    nextFloatRange(args: { name: any; min: any; max: any; }) {
        const generator = this.randomGenerators.get(args.name);
        if (generator) {
            return generator.nextFloat(args.min, args.max);
        } else {
            return i18n("stlsBetterRandom.warnings.generatorNotFound");
        }
    }
    nextBoolean(args: { name: any; }) {
        const generator = this.randomGenerators.get(args.name);
        if (generator) {
            return generator.nextBoolean();
        } else {
            return i18n("stlsBetterRandom.warnings.generatorNotFound");
        }
    }
    xoshiroExtra(args: { name: any; func: string; }) {
        const generator = this.randomGenerators.get(args.name);
        if (generator) {
            if (!(generator instanceof stlsXoshiro128Random)) {
                console.warn(i18n("stlsBetterRandom.console.unsupportedExtra"))
                return;
            }
            switch (args.func) {
                case "jump":
                    generator.jump();
                    break;
                case "long_jump":
                    generator.long_jump();
                    break;
                default:
                    console.warn(i18n("stlsBetterRandom.console.invalidExtraFunction") + "(" + args.func + ")");
            }
        } else {
            console.warn(i18n("stlsBetterRandom.warnings.generatorNotFound"));
        }
    }
}
extensions.register(new stlsBetterRandom(runtime));
interface Window {
    Scratch: any;
}
interface Navigator {
    deviceMemory: number;
}
interface BatteryManager {
    level: number;
}
interface Performance {
    memory: { jsHeapSizeLimit: number, totalJSHeapSize: number, usedJSHeapSize: number }
}
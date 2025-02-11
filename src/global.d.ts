interface Window {
    Scratch: any;
}
interface Navigator {
    getBattery() : Promise<BatteryManager>;
    deviceMemory: number;
}
interface BatteryManager {
    level: number;
}
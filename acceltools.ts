/**
 * Device acceleration tools
 */
//% weight=100 color=#ff9900 icon="➟"
namespace accelTools {
    /**
     * TODO: Takes raw acceleration and fixes the bit signage
     * @param raw raw acceleration from controller.acceleration
     */
    //% block="fix acceleration bytes $raw"
    function fixAccel(raw: number): number {
        raw = raw & 0x0FFF;
        if (raw & 0x0800) {
            raw = raw - 0x1000;
        }
        return raw;
    }

    /**
     * TODO: Estimate rotation around X-axis using Y and Z acceleration
     */
    //% block="device y rotation"
    function deviceXRot(): number {
        let ay = fixAccel(controller.acceleration(ControllerDimension.Y));
        let az = fixAccel(controller.acceleration(ControllerDimension.Z));
        return Math.atan2(ay, az) * 180 / Math.PI;
    }

    /**
     * TODO: Estimate rotation around Y-axis using X and Z acceleration
     */
    //% block="device x rotation"
    function deviceYRot(): number {
        let ax = fixAccel(controller.acceleration(ControllerDimension.X));
        let az = fixAccel(controller.acceleration(ControllerDimension.Z));
        return Math.atan2(ax, az) * 180 / Math.PI;
    }
}

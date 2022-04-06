# camera

These tests validate the camera functionality of the balenaFin.
This includes both single `cam0` as well as dual camera `cam1` functionality.

## requirements

- MIPI CSI camera (x2 for dual cameras)
- MIPI CSI cable (x2 for dual cameras)

## notes

### dual camera

These tests include reference for testing dual camera mode on the balenaFin, where one of the DSI interfaces is repurposed as a secondary CSI interfaces (interfaces `cam0` and `cam1` should be present).
In order to enable this, the DIP switch on the bottom of the balenaFin should be set to the `CAM1` position.
This must be performed while the balenaFin is **powered off**.

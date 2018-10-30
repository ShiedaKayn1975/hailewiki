# How to change brightness
xrandr -q | grep " connected"
xrandr --output LVDS1 --brightness 0.5

# This works
echo 400 > /sys/class/backlight/intel_backlight/brightness

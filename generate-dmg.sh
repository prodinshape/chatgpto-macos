#!/bin/bash

# Assumes the built application is located in the "macos" directory
APP_DIR=./macos

# Specify the name and location of the .dmg file to be generated
DMG_NAME=myApp.dmg
DMG_LOC=./

# Create the .dmg file
hdiutil create -srcfolder "$APP_DIR" -volname "$DMG_NAME" -fs HFS+ -fsargs "-c c=64,a=16,e=16" -format UDZO -imagekey zlib-level=9 -size 300m "$DMG_LOC/$DMG_NAME"

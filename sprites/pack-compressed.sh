#!/bin/bash

# Generate compressed sprite sheets using TexturePacker
# Creates KTX textures with ETC2, DXT5, and ASTC4x4 pixel formats
#
# --flip-pvr:           Phaser 4 requires compressed textures encoded bottom-up (GL orientation)
# --premultiply-alpha:  WebGL can't premultiply compressed textures on upload, so bake it in;
#                       matches Phaser's default premultiplied-alpha blending

TPS_FILE="cityscene.tps"
OUTPUT_DIR="../public/assets/spritesheets"

# ETC2
TexturePacker "$TPS_FILE" \
    --texture-format ktx \
    --pixel-format ETC2_RGBA \
    --flip-pvr \
    --premultiply-alpha \
    --json-file "${OUTPUT_DIR}/cityscene-etc2.json"

# DXT5
TexturePacker "$TPS_FILE" \
    --texture-format ktx \
    --pixel-format DXT5 \
    --flip-pvr \
    --premultiply-alpha \
    --json-file "${OUTPUT_DIR}/cityscene-dxt5.json"

# ASTC 4x4
TexturePacker "$TPS_FILE" \
    --texture-format ktx \
    --pixel-format ASTC_4x4 \
    --flip-pvr \
    --premultiply-alpha \
    --json-file "${OUTPUT_DIR}/cityscene-astc.json"

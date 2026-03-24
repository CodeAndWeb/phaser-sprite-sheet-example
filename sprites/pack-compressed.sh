#!/bin/bash

# Generate compressed sprite sheets using TexturePacker
# Creates KTX textures with ETC2, DXT5, and ASTC4x4 pixel formats

TPS_FILE="cityscene.tps"
OUTPUT_DIR="../public/assets/spritesheets"

# ETC2
TexturePacker "$TPS_FILE" \
    --texture-format ktx \
    --pixel-format ETC2_RGBA \
    --json-file "${OUTPUT_DIR}/cityscene-etc2.json"

# DXT5
TexturePacker "$TPS_FILE" \
    --texture-format ktx \
    --pixel-format DXT5 \
    --json-file "${OUTPUT_DIR}/cityscene-dxt5.json"

# ASTC 4x4
TexturePacker "$TPS_FILE" \
    --texture-format ktx \
    --pixel-format ASTC_4x4 \
    --json-file "${OUTPUT_DIR}/cityscene-astc.json"

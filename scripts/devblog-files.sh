#!/bin/bash

echo "🧼 Creating clean devblog-files.txt (code + config only)..."

OUTPUT="devblog-files.txt"
TARGET_DIR="./apps/devblog"

rm -f $OUTPUT

INCLUDE_EXTENSIONS="ts|tsx|js|jsx|css|scss|json|config.js|mdx"

FILES=$(find "$TARGET_DIR" \
  -type f \
  \( -path "$TARGET_DIR/components/*" \
  -o -path "$TARGET_DIR/pages/*" \
  -o -path "$TARGET_DIR/styles/*" \
  -o -path "$TARGET_DIR/utils/*" \
  -o -path "$TARGET_DIR/data/*" \
  -o -path "$TARGET_DIR/public/*" \
  \) \
  ! -path "*/node_modules/*" \
  ! -path "*/.next/*" \
  ! -path "*/.turbo/*" \
  ! -name "*.spec.ts" \
  ! -name "*.test.tsx" \
  ! -name "*.d.ts" \
  ! -name ".env.*" \
  | grep -E "\.($INCLUDE_EXTENSIONS)$" \
  | sort)

# Include essential config files in app root
CONFIG_FILES=$(find "$TARGET_DIR" \
  -maxdepth 1 \
  -type f \
  \( -name "tailwind.config.js" \
     -o -name "next.config.js" \
     -o -name "postcss.config.js" \
     -o -name "tsconfig.json" \
     -o -name "project.json" \
     -o -name ".eslintrc.json" \
  \))

ALL_FILES="$FILES"$'\n'"$CONFIG_FILES"

for FILE in $ALL_FILES; do
  if [ -f "$FILE" ]; then
    echo "═══════════════════════════════════════════════" >> $OUTPUT
    echo "📄 FILE: $FILE" >> $OUTPUT
    echo "───────────────────────────────────────────────" >> $OUTPUT
    cat "$FILE" >> $OUTPUT
    echo -e "\n" >> $OUTPUT
  fi
done

echo "✅ devblog-files.txt created!"

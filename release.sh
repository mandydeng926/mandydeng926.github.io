# Version key/value should be on his own line
npm version patch
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')


git add .
git commit -m $PACKAGE_VERSION
git push -u origin main
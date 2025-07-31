# deploy.sh

#!/usr/bin/env sh

# abort on errors
set -e

# build
# echo Linting..
# npm run lint
echo Building. this may take a minute...
npm run build

# navigate into the build output directory
cd dist

echo Deploying..
git checkout ghpages
git add -A
git commit -m 'deploy'

# deploy
git push

cd -
set -e
yarn build
gsutil -m rm -- gs://tmkhoa.com/** || :
gsutil -m cp -r build/** gs://tmkhoa.com
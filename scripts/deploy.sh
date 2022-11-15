set -e
yarn build
gsutil -m rm -- gs://tmk04-resume/** || :
gsutil -m cp -r build/** gs://tmk04-resume
set -x

scp $TRAVIS_BUILD_DIR/build $SSH_USER@$SSH_HOST:$REMOTE_DIR
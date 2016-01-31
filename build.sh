#!/bin/bash
grunt build
rm -rf funtolearn.tar.gz
rm -rdf ./funtolearn
mv ./dist ./funtolearn
tar -cf funtolearn.tar ./funtolearn
gzip funtolearn.tar > funtolearn.tar.gz
rm -rf funtolearn.tar
rm -rdf ./funtolearn
mv -f funtolearn.tar.gz ~/workspace/aws/funtolearn.tar.gz

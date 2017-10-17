#!/bin/bash

ROOT=$(cd $(dirname $0)/.. ; pwd)
echo "ROOT: ${ROOT}" >&2

dist=$ROOT/test/new.test.ts
cat <<EOF > $dist
import { expect } from "chai";

describe("CLASS_NAME", function(){
    it("", function(){
    });
    describe("METHOD_NAME", function(){
    });
});
EOF
echo "create test frame: $dist" >&2


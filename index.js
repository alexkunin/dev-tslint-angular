"use strict";

exports = module.exports = {
  "extends": [
    "tslint:recommended",
    "tslint-defocus",
    "tslint-eslint-rules",
    "tslint-etc"
  ],
  "rules": {
    "array-type": false,
    "arrow-parens": false,
    "deprecation": {
      "severity": "warning"
    },
    "component-class-suffix": true,
    "contextual-lifecycle": true,
    "directive-class-suffix": true,
    "directive-selector": [
      true,
      "attribute",
      "app",
      "camelCase"
    ],
    "component-selector": [
      true,
      "element",
      "app",
      "kebab-case"
    ],
    "interface-name": false,
    "max-classes-per-file": false,
    "max-line-length": [
      true,
      {
        "limit": 140,
        "ignore-pattern": "^import |^export {(.*?)}"
      }
    ],
    "member-access": [
      true,
      "no-public"
    ],
    "member-ordering": [
      true,
      {
        "order": [
          "static-field",
          "instance-field",
          "static-method",
          "instance-method"
        ]
      }
    ],
    "no-consecutive-blank-lines": false,
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-empty": false,
    "no-inferrable-types": [
      true,
      "ignore-params"
    ],
    "no-non-null-assertion": true,
    "no-redundant-jsdoc": true,
    "no-switch-case-fall-through": true,
    "no-var-requires": false,
    "object-literal-key-quotes": [
      true,
      "as-needed"
    ],
    "object-literal-sort-keys": false,
    "ordered-imports": [
      true,
      {
        "grouped-imports": true,
        "groups": [
          {
            "match": ".*",
            "order": 0
          }
        ],
        "named-imports-order": "case-insensitive-legacy"
      }
    ],
    "quotemark": [
      true,
      "single"
    ],
    "trailing-comma": [
      true,
      {
        "multiline": "always",
        "singleline": "never"
      }
    ],
    "no-conflicting-lifecycle": true,
    "no-host-metadata-property": true,
    "no-input-rename": true,
    "no-inputs-metadata-property": true,
    "no-output-native": true,
    "no-output-on-prefix": true,
    "no-output-rename": true,
    "no-outputs-metadata-property": true,
    "template-banana-in-box": true,
    "template-no-negated-async": true,
    "use-lifecycle-interface": true,
    "use-pipe-transform-interface": true,
    "defocus": true,
    "whitespace": [
      true,
      "check-module"
    ],
    "object-curly-spacing": true,
    "array-bracket-spacing": "always",
    "no-unused-declaration": true,
    "angular-whitespace": [
      true,
      "check-interpolation"
    ]
  },
  "rulesDirectory": [
    "codelyzer"
  ]
};

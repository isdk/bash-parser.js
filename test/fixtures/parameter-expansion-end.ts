export default {
  sourceCode: 'echoword=$11',
  result: {
    type: 'Script',
    commands: [
      {
        type: 'Command',
        prefix: [
          {
            text: 'echoword=$11',
            expansion: [
              {
                loc: {
                  start: 9,
                  end: 10,
                },
                parameter: 1,
                type: 'ParameterExpansion',
                kind: 'positional',
              },
            ],
            type: 'AssignmentWord',
          },
        ],
      },
    ],
  },
};

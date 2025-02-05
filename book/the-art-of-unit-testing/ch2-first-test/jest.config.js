module.exports = {
    reporters: [
      "default",
      [
        "jest-tap-reporter",
        {
          logLevel: "ERROR", // 로그 레벨 (ERROR, WARN, INFO)
          showInternalStackTraces: true, // 내부 스택 트레이스 표시 여부
        }
      ]
    ],
  };
  
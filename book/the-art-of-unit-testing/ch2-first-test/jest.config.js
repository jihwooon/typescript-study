module.exports = {
    reporters: [
      "default",
      [
        "jest-tap-reporter",
        {
          logLevel: "ERROR", // 로그 레벨 (ERROR, WARN, INFO)
          filePath: "test-results.tap", // 결과 파일 경로
          showInternalStackTraces: true, // 내부 스택 트레이스 표시 여부
        }
      ]
    ],
  };
  
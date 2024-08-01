FROM node:18
WORKDIR /var/app

# 소스코드 없이 프로덕션 의존성만 설치
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# 빌드 결과물만 복사
COPY ./build/ ./build/

# 컨테이너 기본 환경변수 설정
ENV PORT=3031 \
    CORS_ALLOWED_ORIGIN="http://localhost:30030" \
    DB_HOST="localhost" \
    DB_USER="prgms" \
    DB_PASSWD="prgms" \
    DB_NAME="prgms_notes" \
    JWT_SECRET="local-secret"

# 컨테이너라 노출할 포트 지정
EXPOSE 3031

# 헬스체크 설정
HEALTHCHECK CMD curl --fail http://localhost:3031/healthcheck || exit 1

# 컨테이너 시작 시 실행될 명령어 지정
ENTRYPOINT ["node", "."]

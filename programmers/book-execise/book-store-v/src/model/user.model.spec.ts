import { User } from "./user.model";

describe('User Model', () => {
    it('사용자 정보가 주어지면 해당 사용자 객체 데이터를 통과한다.', () => {
        const user: User = { id: 1, email: 'test@example.com' };

        expect(user.id).toBe(1);
        expect(user.email).toBe('test@example.com');
    });
})

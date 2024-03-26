import { Test, TestingModule } from '@nestjs/testing';
import { AccountRepository } from './account.repository';
import { AccountDTO, Gender } from './account.dto';

function generateRandomEmail(): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let email = '';

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    email += characters[randomIndex];
  }

  email += '@example.com';

  return email;
}

describe('AccountRepository', () => {
  let accountRepository: AccountRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountRepository],
    }).compile();

    accountRepository = module.get<AccountRepository>(AccountRepository);
  });

  describe('create', () => {
    it('should create a new account', async () => {
      // Arrange
      const signupDto: AccountDTO = {
        name: generateRandomEmail(),
        firstName: 'John',
        lastName: 'Doe',
        email: generateRandomEmail(),
        birthDate: new Date('1990-01-01'),
        password: 'securePassword123',
        contactNo: generateRandomEmail(),
        gender: Gender.male,
        secondaryEmail: 'john.alt@example.com',
        location: 'City, Country',
        about: 'A brief description about John Doe',
      };

      // Act
      const createSpy = jest.spyOn(accountRepository, 'create');
      const result = await accountRepository.create(signupDto);

      // Assert
      expect(createSpy).toHaveBeenCalledWith(signupDto);
      expect(result).toBeDefined();
      expect(result.name).toEqual(signupDto.name);
      expect(result.email).toEqual(signupDto.email);
      expect(createSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('findByEmail', () => {
    it('should find an account by email', async () => {
      // Arrange
      const email = 'stringdf2@gmail.com';

      // Act
      const findByEmailSpy = jest.spyOn(accountRepository, 'findByEmail');
      const result = await accountRepository.findByEmail(email);

      // Assert
      expect(findByEmailSpy).toHaveBeenCalledWith(email);
      expect(result).toBeDefined();
      expect(result.email).toEqual(email);
    });
  });
});

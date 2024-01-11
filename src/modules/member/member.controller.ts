import { Controller } from '@nestjs/common';

@Controller('members')
export class MemberController {
  constructor(private readonly _memberService: MemberService) {}
}

import { Education } from '../education/education';
import { Experience } from '../experience/experience';
import { Skill } from '../skills/skill';
import { Project } from '../experience/project';
import { SkillGroup } from '../skills/skillgroup';
import { Profile } from '../profile/profile';

export class Resume{
    profile: Profile;
    education: Education[];
    experience: Experience[];
    skills: Skill[];
}
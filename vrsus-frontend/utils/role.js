import {
  enumCodeToLabel,
  enumLabelToCode,
  enumToSelectOptions,
} from './helper'

export class RoleEnum {
  static ADMIN = 0
  static MODERATOR = 1
  static USER = 2

  static Codes = [this.ADMIN, this.MODERATOR, this.USER]
  static Labels = ['Admin', 'Moderator', 'User']

  static toSelectOptions(from, to) {
    return enumToSelectOptions(this.Codes, this.Labels, from, to)
  }

  static codeToLabel(code) {
    return enumCodeToLabel(this.Codes, this.Labels, code)
  }

  static labelToCode(label) {
    return enumLabelToCode(this.Codes, this.Labels, label)
  }
}

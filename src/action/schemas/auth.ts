import { z } from 'zod';

// 認証関連の共通スキーマ定義

// emailの基本バリデーション（必須チェック + 形式チェック）
export const emailSchema = z
  .email('正しいメールアドレスの形式で入力してください')
  .min(1, 'メールアドレスを入力してください');

// passwordの基本バリデーション（必須チェックのみ）
export const passwordSchema = z.string().min(1, 'パスワードを入力してください');

// nameの基本バリデーション（必須チェックのみ）
export const nameSchema = z.string().min(1, '名前を入力してください');

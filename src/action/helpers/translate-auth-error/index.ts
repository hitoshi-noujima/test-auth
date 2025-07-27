import { APIError } from 'better-auth/api';

// 認証APIのエラーメッセージを日本語に変換
// https://better-auth-ui.com/api-reference/auth-localization
export function translateAuthError(error: unknown) {
  if (error instanceof APIError) {
    const errorCode = error.body?.code;

    switch (errorCode) {
      case 'INVALID_EMAIL_OR_PASSWORD':
      case 'INVALID_USERNAME_OR_PASSWORD':
        return 'メールアドレスまたはパスワードが間違っています';
      case 'USER_ALREADY_EXISTS':
      case 'USERNAME_IS_ALREADY_TAKEN':
        return 'アカウント作成に失敗しました。入力内容を確認してください';
      case 'INVALID_EMAIL':
        return 'メールアドレスの形式が正しくありません';
      case 'EMAIL_NOT_VERIFIED':
        return 'メールアドレスの確認が必要です';
      case 'TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE':
        return 'リクエストが多すぎます。しばらく時間をおいてから再度お試しください';
      case 'UNEXPECTED_ERROR':
        return 'アカウント作成に失敗しました。しばらく時間をおいてから再度お試しください';
      default:
        return '認証に失敗しました。入力内容を確認してください';
    }
  }

  return '予期しないエラーが発生しました';
}

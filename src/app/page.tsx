import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href={'/sign-in'}>サインイン</Link> /{' '}
      <Link href={'/sign-up'}>サインアップ</Link> /{' '}
      <Link href={'/dashboard'}>ダッシュボード</Link>
    </div>
  );
}

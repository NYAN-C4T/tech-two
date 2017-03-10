$(function () {
  var headerMenuList = new Vue({
    el: '#contents-header-upper__right-menu',
    data: {
      contents: [
        {text: '特徴'},
        {text: 'コース'},
        {text: 'メンター'},
        {text: '教室'},
        {text: '卒業生'},
        {text: '参加日程・料金'}
      ]
    }
  });

  var headerMain = new Vue({
    el: '#contents-header-main',
    data: {
      title: '募集締め切り',
      deadline: '3月13日 24時',
      next: {
        title: '次回開催',
        term: '3月16日 〜 4月14日'
      }
    }
  });
  //
  // var mainDescription = new Vue({
  //   el: '#contents-main__description',
  //   data: {
  //     heading: 'TECH::CAMPとは?',
  //     body: '未経験からサービスをつくることが出来るエンジニアになる\n短期集中プログラミング学習プログラムです。'
  //   }
  // });
  //
  // var mainEnvList = new Vue({
  //   el: '#contents-main__environment',
  //   data: {
  //     title: [
  //       {text: '未経験から急成長'},
  //       {text: '最高の学習教材'},
  //       {text: 'いつでも質問即回答'}
  //     ],
  //     body: [
  //       {text: '学習効率を高めたプログラムで未経験者でも一気に実力をつけます。本気で技術を身につけたいならTECH::CAMPでロケットスタートを切りましょう。'},
  //       {text: '学習には、受講者のフィードバックをもとに5,000回以上の改善を重ねたTECH::CAMPオリジナル教材 (TECH::MASTER)を利用します。'},
  //       {text: 'キャンプ中はメンターが常時待機し、1秒でも早く参加者の疑問を解決します。※土日祝日含む11時〜23時の間教室&オンラインで質問受付'}
  //     ]
  //   }
  // });
  //
  // var mainProgList = new Vue({
  //   el: '#contents-main__program',
  //   data: {
  //     heading: '効率を極めた学習プログラム',
  //     title: [
  //       {text: 'オリジナル学習システムで新たな知識を身に付ける'},
  //       {text: '実際にサービスをつくりながら実践する'},
  //       {text: '疑問はメンターに質問、即解決'}
  //     ],
  //     body: [
  //       {text: '学習効率を高めたプログラムで未経験者でも一気に実力をつけます。本気で技術を身につけたいならTECH::CAMPでロケットスタートを切りましょう。'},
  //       {text: '学習には、受講者のフィードバックをもとに5,000回以上の改善を重ねたTECH::CAMPオリジナル教材 (TECH::MASTER)を利用します。'},
  //       {text: 'キャンプ中はメンターが常時待機し、1秒でも早く参加者の疑問を解決します。※土日祝日含む11時〜23時の間教室&オンラインで質問受付'}
  //     ]
  //   }
  // });
});
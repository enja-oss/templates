# enja-oss repo scaffolding

enja-ossにて新規翻訳プロジェクトを作成する際は、本レポジトリをcloneして利用してください。  

## インストール

[gruntjs/grunt-init](https://github.com/gruntjs/grunt-init)を利用しています。  
`grunt-init`は **リリース前** のプロジェクトです。  
**npmで通常インストールできるバージョンでは正しく動作しません。**  
現時点で動作が確認できている`grunt-init`のバージョンは`0.2.0rc3`です。  
本カスタムテンプレートを`grunt-init`の最新バージョンでテストする以外の目的では以下のコマンドで`0.2.0rc3`をインストールしてください。  
`[sudo] npm install -g git://github.com/gruntjs/grunt-init.git#6ca6a7bd432d77d6641a5cadd210ce15f39d062c`

## 利用方法

新たに作成するレポジトリ用の **ディレクトリ内** で

`grunt-init clone後のディレクトリ`

または本レポジトリ内の`enja-oss-repo`ディレクトリを`~/.grunt-init/`内にコピーしておくと:

`grunt-init enja-oss-repo`

のコマンドで実行できます。

**注意:
コマンドを実行するディレクトリ内のすべてのファイル、ディレクトリは上書きされてしまう可能性があります。必ず空のディレクトリで実行してください。**

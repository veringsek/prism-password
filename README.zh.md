# 菱鏡密碼

[English](README.md) 中文

菱鏡密碼是一種新的動態密碼。

⚠ **請注意，這支程式只是用來展示菱鏡密碼的運作模式，沒有經過嚴謹的強健性與安全性測試。在正式環境下使用此程式可能會產生相當程度的危害。**

## 概念

在《[抗圖形辨識的推理導向驗證碼](https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/ccd=6dDp2g/record?r1=1&h1=0)》中，雖然沒有明確地指出，但事實上，作者透過建立新的驗證碼系統將檢驗人類身份的方法從傳統的「他可以辨識某個東西」轉變為「他知道如何處理某個東西」。所謂「辨識某個東西」包含「辨識文字」、「辨識影像」、「辨識算式」等等。所謂「知道如何處理某個東西」包含「知道如何計算算式」以及「知道如何推理」。

密碼機制是用來檢驗擁有者身份的，傳統的作法是基於「他知道某個東西」，而所謂「知道某個東西」代表著「知道某串文字或數字」，這個「某串文字或數字」就是傳統意義上的密碼。而我們可以模仿推理導向驗證碼，將驗證擁有者身份的方法改為「他知道如何處理某個東西」。

菱鏡密碼以「他知道如何將某個字串轉換為另一個字串」作為擁有者身份的檢驗方法，而這個轉換方法必須由擁有者事先提供給菱鏡密碼系統。

舉一個較簡單的例子，在註冊帳戶時，使用者可以把他的菱鏡密碼設定成*以來源字串中的前兩位數乘上來源字串中的後兩位數*，如此一來，在登入帳戶時，菱鏡密碼系統會先隨機給出一個來源字串，假設這個來源字串是`529930`，執行登入的使用者就必須把這個來源字串轉換為$52 \times 30 = 1560$，此時，`1560`就是正確的登入密碼。

## 理由

即便是科技發達的今日，仍然有多種情境中，輸入的密碼可能被他人得知，包含技術含量較高的中間人攻擊、鍵盤側錄，也包含一些毫無技術可言的情境，比如有人就站在輸入密碼者的身後。

如果密碼頻繁變動，外流的密碼就不構成威脅，因為當時的密碼不等於現在的密碼。因此才有人設計了一次性密碼。

## 適用情境

## 弱點

## 授權

[MIT](https://opensource.org/licenses/MIT)

版權所有 © 民國111年，veringsek
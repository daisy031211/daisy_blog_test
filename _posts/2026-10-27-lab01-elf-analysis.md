---
title: "[LAB 01] C 컴파일과 ELF 구조 분석"
date: 2026-10-27
categories:
  - development
tags:
  - C
  - ELF
  - Binary Analysis
excerpt: "C 프로그램을 컴파일하고 ELF 파일의 구조를 분석하는 기초 실습"
header:
  teaser: /assets/images/elf-thumbnail.png
---

## 1. 실습 목적

C 프로그램의 컴파일 과정을 이해하고, 생성된 ELF 실행 파일의 구조와 특징을 분석한다.

## 2. 실습 환경

- 운영체제: Ubuntu (WSL)
- 컴파일러: GCC
- 분석 도구: file, strings, IDA Free, GDB

## 3. 실습 과정

### 3.1 C 프로그램 컴파일

간단한 C 프로그램을 작성하고 GCC를 이용해 ELF 실행 파일로 컴파일한다.

### 3.2 ELF 파일 확인

`file` 명령어를 사용하여 실행 파일의 형식과 아키텍처를 확인한다.

### 3.3 정적 분석

IDA Free를 사용하여 `main` 함수의 어셈블리 명령어와 함수 호출 흐름을 분석한다.

### 3.4 동적 분석

GDB를 사용하여 프로그램 실행 중 레지스터와 스택 메모리의 변화를 확인한다.

## 4. 실습 정리

이번 실습을 통해 C 프로그램이 ELF 실행 파일로 변환되는 과정과 정적·동적 분석의 기본 흐름을 학습했다.

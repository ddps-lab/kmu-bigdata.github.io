=================
 KMU BigData Lab
=================

:Web: http://kmubigdata.cloud/


컨텐츠 추가
=========

News
-----

News는 메인 페이지 하단에 있는 Carousel에 노출되는 슬라이딩 텍스트입니다. 이 컨텐츠를 추가하려면 ``_data/news.yml`` 에 아래와 같은 형식으로 내용을 추가합니다.

.. sourcecode:: yml

    - title: 뉴스 제목
      content: "뉴스 내용"


People
-----

People은 People 페이지에 표시되는 그리드형 항목입니다. 이 컨텐츠를 추가하려면 ``_data/people.yml`` 에 아래와 같은 형식으로 내용을 추가합니다.

.. sourcecode:: yml

    - name: 이름
      photo: 500*500 사이즈의 이미지 경로
      website: (선택) 웹사이트 링크


Project
-----

Project는 Project 페이지에 표시되는 그리드형 항목입니다. 이 컨텐츠를 추가하려면 ``_data/project.yml`` 에 아래와 같은 형식으로 내용을 추가합니다.

.. sourcecode:: yml

    - name: 이름
      photo: 이미지 경로
      url: 웹사이트 링크
      description: 상세 설명


Publication
-----

Publication은 Publication 페이지에 표시되는 리스트형 항목입니다. 이 컨텐츠를 추가하려면 ``_data/publication.yml`` 에 아래와 같은 형식으로 내용을 추가합니다.

.. sourcecode:: yml

    - authors: 논문 저자
      date: 논문 게제 년월 (MM/YYYY)
      draw: 논문 게재 위치
      links:
      - name: 링크 제목
        url: 링크 url


Seminar
-----

Seminar는 Seminar 페이지에 표시되는 리스트형 항목입니다. 이 컨텐츠를 추가하려면 ``_data/seminar.yml`` 에 아래와 같은 형식으로 내용을 추가합니다.

.. sourcecode:: yml

    - date: 'YYYY-MM-DD'
      presenter: 발표자명
      topic: 발표주제
      links:
      - name: 링크 제목
        url: 링크 url
      presentation:
      - name: 링크 제목
        url: 링크 url
        

Activity
-----

Activity는 Activity 페이지에 표시되는 그리드형 게시물 항목입니다. 이 컨텐츠를 추가하려면 ``_post`` 페이지에 아래와 같은 조건을 만족시키는 markdown 문서를 추가합니다.

- 파일 제목은 ``YYYY-MM-DD-{title}.markdown`` 이어야합니다.
- markdown 문서의 내용은 Activity 항목 클릭 시 나오는 디테일 페이지에 출력될 내용입니다.
- markdown 파일 최상단에 아래와 같은 형식의 metadata를 입력하여야합니다.

.. sourcecode:: markdown

    ---
    layout: activity
    title: "제목"
    date: YYYY-MM-DD hh:mm:ss +0900
    thumbnail: "thumbnail path"
    description: "설명"
    ---


Wiki
-----

Wiki는 Wiki 페이지에 표시되는 그리드형 게시물 항목입니다. 이 컨텐츠를 추가하려면 ``_post`` 페이지에 아래와 같은 조건을 만족시키는 markdown 문서를 추가합니다.

- 파일 제목은 ``YYYY-MM-DD-{title}.markdown`` 이어야합니다.
- markdown 문서의 내용은 Wiki 항목 클릭 시 나오는 디테일 페이지에 출력될 내용입니다.
- markdown 파일 최상단에 아래와 같은 형식의 metadata를 입력하여야합니다.

.. sourcecode:: markdown

    ---
    layout: wiki
    title: "제목"
    date: YYYY-MM-DD hh:mm:ss +0900
    ---




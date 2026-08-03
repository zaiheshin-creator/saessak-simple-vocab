const WORDS = [
  {
    "word": "abandon",
    "meaning": "버리다, 포기하다",
    "level": 2
  },
  {
    "word": "ability",
    "meaning": "능력",
    "level": 1
  },
  {
    "word": "able",
    "meaning": "할 수 있는",
    "level": 1
  },
  {
    "word": "abroad",
    "meaning": "해외로, 해외에서",
    "level": 2
  },
  {
    "word": "absence",
    "meaning": "부재, 결석",
    "level": 3
  },
  {
    "word": "absent",
    "meaning": "결석한, 없는",
    "level": 3
  },
  {
    "word": "absolute",
    "meaning": "완전한, 절대적인",
    "level": 3
  },
  {
    "word": "absorb",
    "meaning": "흡수하다",
    "level": 3
  },
  {
    "word": "abstract",
    "meaning": "추상적인",
    "level": 3
  },
  {
    "word": "absurd",
    "meaning": "터무니없는, 불합리한",
    "level": 3
  },
  {
    "word": "abuse",
    "meaning": "남용하다, 학대하다",
    "level": 3
  },
  {
    "word": "accent",
    "meaning": "억양, 강세",
    "level": 2
  },
  {
    "word": "accept",
    "meaning": "받아들이다, 수락하다",
    "level": 1
  },
  {
    "word": "access",
    "meaning": "접근, 접근하다",
    "level": 2
  },
  {
    "word": "accident",
    "meaning": "사고",
    "level": 1
  },
  {
    "word": "accompany",
    "meaning": "동반하다, 동행하다",
    "level": 3
  },
  {
    "word": "accomplish",
    "meaning": "성취하다, 완수하다",
    "level": 3
  },
  {
    "word": "according",
    "meaning": "~에 따르면",
    "level": 2
  },
  {
    "word": "account",
    "meaning": "계좌, 설명, 이유",
    "level": 2
  },
  {
    "word": "accurate",
    "meaning": "정확한",
    "level": 3
  },
  {
    "word": "accuse",
    "meaning": "비난하다, 고발하다",
    "level": 3
  },
  {
    "word": "achieve",
    "meaning": "성취하다, 이루다",
    "level": 2
  },
  {
    "word": "achievement",
    "meaning": "성취, 업적",
    "level": 3
  },
  {
    "word": "acid",
    "meaning": "산성의, 산",
    "level": 2
  },
  {
    "word": "acquire",
    "meaning": "습득하다, 얻다",
    "level": 3
  },
  {
    "word": "across",
    "meaning": "가로질러, 건너서",
    "level": 1
  },
  {
    "word": "act",
    "meaning": "행동하다, 연기하다",
    "level": 1
  },
  {
    "word": "action",
    "meaning": "행동, 조치",
    "level": 1
  },
  {
    "word": "active",
    "meaning": "활동적인",
    "level": 1
  },
  {
    "word": "activity",
    "meaning": "활동",
    "level": 1
  },
  {
    "word": "actor",
    "meaning": "배우",
    "level": 1
  },
  {
    "word": "actual",
    "meaning": "실제의",
    "level": 2
  },
  {
    "word": "actually",
    "meaning": "실제로",
    "level": 1
  },
  {
    "word": "adapt",
    "meaning": "적응하다, 맞추다",
    "level": 3
  },
  {
    "word": "add",
    "meaning": "더하다, 추가하다",
    "level": 1
  },
  {
    "word": "addition",
    "meaning": "추가, 덧셈",
    "level": 2
  },
  {
    "word": "address",
    "meaning": "주소, 연설하다",
    "level": 2
  },
  {
    "word": "adequate",
    "meaning": "충분한, 적절한",
    "level": 3
  },
  {
    "word": "adjust",
    "meaning": "조정하다, 적응하다",
    "level": 3
  },
  {
    "word": "admire",
    "meaning": "감탄하다, 존경하다",
    "level": 3
  },
  {
    "word": "admit",
    "meaning": "인정하다, 허락하다",
    "level": 2
  },
  {
    "word": "adopt",
    "meaning": "채택하다, 입양하다",
    "level": 2
  },
  {
    "word": "adult",
    "meaning": "성인, 어른",
    "level": 2
  },
  {
    "word": "advance",
    "meaning": "전진하다, 진보",
    "level": 3
  },
  {
    "word": "advantage",
    "meaning": "이점, 장점",
    "level": 3
  },
  {
    "word": "adventure",
    "meaning": "모험",
    "level": 2
  },
  {
    "word": "advertise",
    "meaning": "광고하다",
    "level": 2
  },
  {
    "word": "advice",
    "meaning": "충고, 조언",
    "level": 2
  },
  {
    "word": "advise",
    "meaning": "충고하다, 조언하다",
    "level": 2
  },
  {
    "word": "affect",
    "meaning": "영향을 미치다",
    "level": 2
  },
  {
    "word": "baby",
    "meaning": "아기",
    "level": 1
  },
  {
    "word": "background",
    "meaning": "배경",
    "level": 2
  },
  {
    "word": "bake",
    "meaning": "굽다",
    "level": 1
  },
  {
    "word": "balance",
    "meaning": "균형, 잔액",
    "level": 2
  },
  {
    "word": "ball",
    "meaning": "공",
    "level": 1
  },
  {
    "word": "ban",
    "meaning": "금지하다",
    "level": 2
  },
  {
    "word": "band",
    "meaning": "밴드, 무리, 띠",
    "level": 2
  },
  {
    "word": "bank",
    "meaning": "은행, 둑",
    "level": 1
  },
  {
    "word": "bar",
    "meaning": "막대, 술집",
    "level": 2
  },
  {
    "word": "bare",
    "meaning": "벌거벗은, 맨",
    "level": 3
  },
  {
    "word": "bargain",
    "meaning": "흥정하다, 싸게 사는 물건",
    "level": 3
  },
  {
    "word": "barrier",
    "meaning": "장벽, 장애물",
    "level": 3
  },
  {
    "word": "base",
    "meaning": "기초, 기반, 근거지",
    "level": 2
  },
  {
    "word": "basic",
    "meaning": "기본적인",
    "level": 1
  },
  {
    "word": "basis",
    "meaning": "기초, 근거",
    "level": 3
  },
  {
    "word": "battle",
    "meaning": "전투, 싸움",
    "level": 3
  },
  {
    "word": "bear",
    "meaning": "견디다, 곰",
    "level": 1
  },
  {
    "word": "beat",
    "meaning": "이기다, 때리다",
    "level": 1
  },
  {
    "word": "beautiful",
    "meaning": "아름다운",
    "level": 1
  },
  {
    "word": "beauty",
    "meaning": "아름다움, 미인",
    "level": 2
  },
  {
    "word": "because",
    "meaning": "왜냐하면, ~때문에",
    "level": 1
  },
  {
    "word": "become",
    "meaning": "~이 되다",
    "level": 1
  },
  {
    "word": "before",
    "meaning": "~전에",
    "level": 1
  },
  {
    "word": "begin",
    "meaning": "시작하다",
    "level": 1
  },
  {
    "word": "beginning",
    "meaning": "시작, 처음",
    "level": 1
  },
  {
    "word": "behave",
    "meaning": "행동하다",
    "level": 2
  },
  {
    "word": "behavior",
    "meaning": "행동, 태도",
    "level": 3
  },
  {
    "word": "behind",
    "meaning": "~뒤에",
    "level": 1
  },
  {
    "word": "belief",
    "meaning": "믿음, 신념",
    "level": 3
  },
  {
    "word": "believe",
    "meaning": "믿다",
    "level": 1
  },
  {
    "word": "belong",
    "meaning": "속하다",
    "level": 1
  },
  {
    "word": "below",
    "meaning": "아래에",
    "level": 1
  },
  {
    "word": "bend",
    "meaning": "구부리다",
    "level": 2
  },
  {
    "word": "beneath",
    "meaning": "~아래에",
    "level": 3
  },
  {
    "word": "benefit",
    "meaning": "이익, 혜택",
    "level": 2
  },
  {
    "word": "beside",
    "meaning": "~옆에",
    "level": 1
  },
  {
    "word": "besides",
    "meaning": "게다가, ~외에",
    "level": 3
  },
  {
    "word": "between",
    "meaning": "~사이에",
    "level": 1
  },
  {
    "word": "beyond",
    "meaning": "~너머, ~을 넘어서",
    "level": 3
  },
  {
    "word": "bill",
    "meaning": "청구서, 지폐, 법안",
    "level": 2
  },
  {
    "word": "billion",
    "meaning": "10억",
    "level": 2
  },
  {
    "word": "bind",
    "meaning": "묶다, 결속시키다",
    "level": 3
  },
  {
    "word": "bit",
    "meaning": "조금, 약간",
    "level": 1
  },
  {
    "word": "bite",
    "meaning": "물다",
    "level": 1
  },
  {
    "word": "bitter",
    "meaning": "쓴, 쓰라린",
    "level": 3
  },
  {
    "word": "blame",
    "meaning": "비난하다, 탓하다",
    "level": 2
  },
  {
    "word": "blank",
    "meaning": "빈, 공백의",
    "level": 2
  },
  {
    "word": "blend",
    "meaning": "섞다, 혼합하다",
    "level": 3
  },
  {
    "word": "blind",
    "meaning": "눈이 먼",
    "level": 1
  },
  {
    "word": "block",
    "meaning": "막다, 구역, 블록",
    "level": 2
  },
  {
    "word": "calculate",
    "meaning": "계산하다",
    "level": 2
  },
  {
    "word": "campaign",
    "meaning": "캠페인, 운동",
    "level": 2
  },
  {
    "word": "cancel",
    "meaning": "취소하다",
    "level": 2
  },
  {
    "word": "candidate",
    "meaning": "후보자",
    "level": 2
  },
  {
    "word": "capable",
    "meaning": "~할 수 있는, 유능한",
    "level": 3
  },
  {
    "word": "capacity",
    "meaning": "수용력, 능력",
    "level": 3
  },
  {
    "word": "capital",
    "meaning": "수도, 자본, 대문자",
    "level": 2
  },
  {
    "word": "capture",
    "meaning": "붙잡다, 포획하다",
    "level": 3
  },
  {
    "word": "career",
    "meaning": "직업, 경력",
    "level": 2
  },
  {
    "word": "careful",
    "meaning": "조심스러운, 주의 깊은",
    "level": 1
  },
  {
    "word": "carry",
    "meaning": "나르다, 운반하다",
    "level": 1
  },
  {
    "word": "case",
    "meaning": "경우, 사례, 상자",
    "level": 1
  },
  {
    "word": "category",
    "meaning": "범주, 부류",
    "level": 3
  },
  {
    "word": "cause",
    "meaning": "원인, 야기하다",
    "level": 1
  },
  {
    "word": "celebrate",
    "meaning": "축하하다",
    "level": 1
  },
  {
    "word": "celebration",
    "meaning": "축하, 기념 행사",
    "level": 1
  },
  {
    "word": "century",
    "meaning": "세기, 백 년",
    "level": 1
  },
  {
    "word": "certain",
    "meaning": "확실한, 어떤",
    "level": 1
  },
  {
    "word": "chain",
    "meaning": "사슬, 체인",
    "level": 1
  },
  {
    "word": "challenge",
    "meaning": "도전, 도전하다",
    "level": 2
  },
  {
    "word": "chance",
    "meaning": "기회, 가능성",
    "level": 1
  },
  {
    "word": "change",
    "meaning": "변화, 바꾸다",
    "level": 1
  },
  {
    "word": "character",
    "meaning": "성격, 등장인물",
    "level": 2
  },
  {
    "word": "characteristic",
    "meaning": "특징, 특유의",
    "level": 3
  },
  {
    "word": "charge",
    "meaning": "청구하다, 요금, 책임",
    "level": 2
  },
  {
    "word": "charity",
    "meaning": "자선, 자선단체",
    "level": 3
  },
  {
    "word": "chase",
    "meaning": "뒤쫓다, 추격하다",
    "level": 2
  },
  {
    "word": "chat",
    "meaning": "잡담하다",
    "level": 1
  },
  {
    "word": "cheap",
    "meaning": "값싼",
    "level": 1
  },
  {
    "word": "cheat",
    "meaning": "속이다, 부정행위를 하다",
    "level": 2
  },
  {
    "word": "check",
    "meaning": "확인하다, 점검하다",
    "level": 1
  },
  {
    "word": "cheer",
    "meaning": "응원하다, 환호",
    "level": 1
  },
  {
    "word": "chemical",
    "meaning": "화학의, 화학물질",
    "level": 3
  },
  {
    "word": "chief",
    "meaning": "주요한, 우두머리",
    "level": 2
  },
  {
    "word": "childhood",
    "meaning": "어린 시절",
    "level": 2
  },
  {
    "word": "choice",
    "meaning": "선택",
    "level": 1
  },
  {
    "word": "choose",
    "meaning": "선택하다, 고르다",
    "level": 1
  },
  {
    "word": "circumstance",
    "meaning": "상황, 환경",
    "level": 3
  },
  {
    "word": "cite",
    "meaning": "인용하다",
    "level": 3
  },
  {
    "word": "citizen",
    "meaning": "시민",
    "level": 1
  },
  {
    "word": "civil",
    "meaning": "시민의, 민간의",
    "level": 3
  },
  {
    "word": "civilization",
    "meaning": "문명",
    "level": 3
  },
  {
    "word": "claim",
    "meaning": "주장하다, 요구하다",
    "level": 2
  },
  {
    "word": "clarify",
    "meaning": "명확하게 하다",
    "level": 3
  },
  {
    "word": "classic",
    "meaning": "고전적인, 대표적인",
    "level": 3
  },
  {
    "word": "classify",
    "meaning": "분류하다",
    "level": 2
  },
  {
    "word": "clue",
    "meaning": "단서, 실마리",
    "level": 1
  },
  {
    "word": "collapse",
    "meaning": "붕괴하다, 무너지다",
    "level": 3
  },
  {
    "word": "colleague",
    "meaning": "동료",
    "level": 2
  },
  {
    "word": "collect",
    "meaning": "수집하다, 모으다",
    "level": 1
  },
  {
    "word": "daily",
    "meaning": "매일의, 일상의",
    "level": 1
  },
  {
    "word": "damage",
    "meaning": "손상, 피해",
    "level": 2
  },
  {
    "word": "danger",
    "meaning": "위험",
    "level": 1
  },
  {
    "word": "dangerous",
    "meaning": "위험한",
    "level": 1
  },
  {
    "word": "dare",
    "meaning": "감히 ~하다",
    "level": 2
  },
  {
    "word": "data",
    "meaning": "자료, 데이터",
    "level": 1
  },
  {
    "word": "deadline",
    "meaning": "마감 기한",
    "level": 2
  },
  {
    "word": "deal",
    "meaning": "거래하다, 다루다",
    "level": 1
  },
  {
    "word": "debate",
    "meaning": "토론, 논쟁",
    "level": 3
  },
  {
    "word": "debt",
    "meaning": "빚, 부채",
    "level": 2
  },
  {
    "word": "decade",
    "meaning": "10년",
    "level": 2
  },
  {
    "word": "decide",
    "meaning": "결정하다",
    "level": 1
  },
  {
    "word": "decision",
    "meaning": "결정",
    "level": 1
  },
  {
    "word": "declare",
    "meaning": "선언하다, 공표하다",
    "level": 3
  },
  {
    "word": "decline",
    "meaning": "감소하다, 거절하다",
    "level": 3
  },
  {
    "word": "decrease",
    "meaning": "감소하다, 줄다",
    "level": 2
  },
  {
    "word": "dedicate",
    "meaning": "헌신하다, 바치다",
    "level": 3
  },
  {
    "word": "deep",
    "meaning": "깊은",
    "level": 1
  },
  {
    "word": "defeat",
    "meaning": "패배시키다, 물리치다",
    "level": 2
  },
  {
    "word": "defend",
    "meaning": "방어하다, 옹호하다",
    "level": 2
  },
  {
    "word": "define",
    "meaning": "정의하다",
    "level": 2
  },
  {
    "word": "definite",
    "meaning": "명확한, 확실한",
    "level": 3
  },
  {
    "word": "definition",
    "meaning": "정의, 의미",
    "level": 3
  },
  {
    "word": "degree",
    "meaning": "정도, 학위",
    "level": 3
  },
  {
    "word": "delay",
    "meaning": "지연시키다, 미루다",
    "level": 2
  },
  {
    "word": "deliberate",
    "meaning": "의도적인, 신중한",
    "level": 3
  },
  {
    "word": "delicate",
    "meaning": "섬세한, 연약한",
    "level": 3
  },
  {
    "word": "delight",
    "meaning": "기쁨, 즐거움",
    "level": 2
  },
  {
    "word": "deliver",
    "meaning": "배달하다, 전달하다",
    "level": 1
  },
  {
    "word": "demand",
    "meaning": "요구하다, 수요",
    "level": 2
  },
  {
    "word": "democracy",
    "meaning": "민주주의",
    "level": 3
  },
  {
    "word": "demonstrate",
    "meaning": "증명하다, 보여주다",
    "level": 3
  },
  {
    "word": "dense",
    "meaning": "밀집한, 짙은",
    "level": 3
  },
  {
    "word": "deny",
    "meaning": "부인하다, 거부하다",
    "level": 2
  },
  {
    "word": "depend",
    "meaning": "의존하다, 달려있다",
    "level": 1
  },
  {
    "word": "depress",
    "meaning": "우울하게 하다",
    "level": 3
  },
  {
    "word": "depth",
    "meaning": "깊이",
    "level": 3
  },
  {
    "word": "derive",
    "meaning": "유래하다, 끌어내다",
    "level": 3
  },
  {
    "word": "describe",
    "meaning": "묘사하다, 설명하다",
    "level": 1
  },
  {
    "word": "description",
    "meaning": "묘사, 설명",
    "level": 3
  },
  {
    "word": "desert",
    "meaning": "사막, 버리다",
    "level": 2
  },
  {
    "word": "deserve",
    "meaning": "~할 자격이 있다, 받을 만하다",
    "level": 2
  },
  {
    "word": "design",
    "meaning": "디자인하다, 설계하다",
    "level": 1
  },
  {
    "word": "desire",
    "meaning": "욕구, 바라다",
    "level": 3
  },
  {
    "word": "despite",
    "meaning": "~에도 불구하고",
    "level": 3
  },
  {
    "word": "destination",
    "meaning": "목적지",
    "level": 2
  },
  {
    "word": "destroy",
    "meaning": "파괴하다",
    "level": 1
  },
  {
    "word": "detail",
    "meaning": "세부사항",
    "level": 2
  },
  {
    "word": "detect",
    "meaning": "발견하다, 탐지하다",
    "level": 3
  },
  {
    "word": "determine",
    "meaning": "결정하다, 알아내다",
    "level": 3
  },
  {
    "word": "eager",
    "meaning": "열망하는",
    "level": 3
  },
  {
    "word": "early",
    "meaning": "이른, 일찍",
    "level": 1
  },
  {
    "word": "earn",
    "meaning": "벌다",
    "level": 2
  },
  {
    "word": "earth",
    "meaning": "지구",
    "level": 1
  },
  {
    "word": "ease",
    "meaning": "편안함, 완화하다",
    "level": 2
  },
  {
    "word": "east",
    "meaning": "동쪽",
    "level": 1
  },
  {
    "word": "easy",
    "meaning": "쉬운",
    "level": 1
  },
  {
    "word": "economic",
    "meaning": "경제의",
    "level": 2
  },
  {
    "word": "economy",
    "meaning": "경제",
    "level": 2
  },
  {
    "word": "edge",
    "meaning": "가장자리",
    "level": 2
  },
  {
    "word": "educate",
    "meaning": "교육하다",
    "level": 2
  },
  {
    "word": "education",
    "meaning": "교육",
    "level": 2
  },
  {
    "word": "effect",
    "meaning": "효과, 영향",
    "level": 2
  },
  {
    "word": "effective",
    "meaning": "효과적인",
    "level": 2
  },
  {
    "word": "efficient",
    "meaning": "효율적인",
    "level": 3
  },
  {
    "word": "effort",
    "meaning": "노력",
    "level": 2
  },
  {
    "word": "either",
    "meaning": "둘 중 어느 한쪽",
    "level": 1
  },
  {
    "word": "elderly",
    "meaning": "연세가 드신",
    "level": 3
  },
  {
    "word": "elect",
    "meaning": "선출하다",
    "level": 2
  },
  {
    "word": "election",
    "meaning": "선거",
    "level": 2
  },
  {
    "word": "electric",
    "meaning": "전기의",
    "level": 1
  },
  {
    "word": "electricity",
    "meaning": "전기",
    "level": 2
  },
  {
    "word": "element",
    "meaning": "요소",
    "level": 3
  },
  {
    "word": "elementary",
    "meaning": "초보의, 초등의",
    "level": 1
  },
  {
    "word": "eliminate",
    "meaning": "제거하다",
    "level": 3
  },
  {
    "word": "embarrass",
    "meaning": "당황하게 하다",
    "level": 3
  },
  {
    "word": "emerge",
    "meaning": "나타나다",
    "level": 3
  },
  {
    "word": "emergency",
    "meaning": "비상사태",
    "level": 2
  },
  {
    "word": "face",
    "meaning": "얼굴, 직면하다",
    "level": 1
  },
  {
    "word": "fact",
    "meaning": "사실",
    "level": 1
  },
  {
    "word": "factor",
    "meaning": "요인",
    "level": 3
  },
  {
    "word": "factory",
    "meaning": "공장",
    "level": 1
  },
  {
    "word": "fail",
    "meaning": "실패하다",
    "level": 2
  },
  {
    "word": "failure",
    "meaning": "실패",
    "level": 3
  },
  {
    "word": "fair",
    "meaning": "공정한",
    "level": 2
  },
  {
    "word": "faith",
    "meaning": "믿음, 신앙",
    "level": 3
  },
  {
    "word": "fall",
    "meaning": "떨어지다, 가을",
    "level": 1
  },
  {
    "word": "familiar",
    "meaning": "익숙한",
    "level": 2
  },
  {
    "word": "family",
    "meaning": "가족",
    "level": 1
  },
  {
    "word": "famous",
    "meaning": "유명한",
    "level": 1
  },
  {
    "word": "fantastic",
    "meaning": "환상적인",
    "level": 2
  },
  {
    "word": "far",
    "meaning": "먼, 멀리",
    "level": 1
  },
  {
    "word": "farm",
    "meaning": "농장",
    "level": 1
  },
  {
    "word": "farmer",
    "meaning": "농부",
    "level": 1
  },
  {
    "word": "fashion",
    "meaning": "유행, 패션",
    "level": 2
  },
  {
    "word": "fast",
    "meaning": "빠른",
    "level": 1
  },
  {
    "word": "fasten",
    "meaning": "고정시키다",
    "level": 3
  },
  {
    "word": "fat",
    "meaning": "뚱뚱한, 지방",
    "level": 1
  },
  {
    "word": "fate",
    "meaning": "운명",
    "level": 3
  },
  {
    "word": "fault",
    "meaning": "잘못, 결함",
    "level": 3
  },
  {
    "word": "favor",
    "meaning": "호의",
    "level": 2
  },
  {
    "word": "favorite",
    "meaning": "가장 좋아하는",
    "level": 1
  },
  {
    "word": "fear",
    "meaning": "두려움",
    "level": 2
  },
  {
    "word": "feature",
    "meaning": "특징",
    "level": 2
  },
  {
    "word": "gain",
    "meaning": "얻다",
    "level": 3
  },
  {
    "word": "garage",
    "meaning": "차고",
    "level": 1
  },
  {
    "word": "garbage",
    "meaning": "쓰레기",
    "level": 1
  },
  {
    "word": "garden",
    "meaning": "정원",
    "level": 1
  },
  {
    "word": "gather",
    "meaning": "모으다",
    "level": 2
  },
  {
    "word": "gender",
    "meaning": "성별",
    "level": 3
  },
  {
    "word": "gene",
    "meaning": "유전자",
    "level": 3
  },
  {
    "word": "general",
    "meaning": "일반적인",
    "level": 2
  },
  {
    "word": "generally",
    "meaning": "일반적으로",
    "level": 3
  },
  {
    "word": "generate",
    "meaning": "발생시키다",
    "level": 3
  },
  {
    "word": "generation",
    "meaning": "세대",
    "level": 2
  },
  {
    "word": "generous",
    "meaning": "관대한",
    "level": 2
  },
  {
    "word": "gentle",
    "meaning": "온화한",
    "level": 2
  },
  {
    "word": "gentleman",
    "meaning": "신사",
    "level": 3
  },
  {
    "word": "genuine",
    "meaning": "진짜의",
    "level": 3
  },
  {
    "word": "geography",
    "meaning": "지리학",
    "level": 2
  },
  {
    "word": "gesture",
    "meaning": "몸짓",
    "level": 3
  },
  {
    "word": "get",
    "meaning": "얻다",
    "level": 1
  },
  {
    "word": "ghost",
    "meaning": "유령",
    "level": 1
  },
  {
    "word": "giant",
    "meaning": "거대한",
    "level": 2
  },
  {
    "word": "gift",
    "meaning": "선물",
    "level": 1
  },
  {
    "word": "girl",
    "meaning": "소녀",
    "level": 1
  },
  {
    "word": "give",
    "meaning": "주다",
    "level": 1
  },
  {
    "word": "glad",
    "meaning": "기쁜",
    "level": 1
  },
  {
    "word": "habit",
    "meaning": "습관",
    "level": 2
  },
  {
    "word": "habitat",
    "meaning": "서식지",
    "level": 3
  },
  {
    "word": "hair",
    "meaning": "머리카락",
    "level": 1
  },
  {
    "word": "half",
    "meaning": "절반",
    "level": 1
  },
  {
    "word": "hall",
    "meaning": "홀, 복도",
    "level": 2
  },
  {
    "word": "hand",
    "meaning": "손",
    "level": 1
  },
  {
    "word": "handle",
    "meaning": "다루다, 손잡이",
    "level": 2
  },
  {
    "word": "handsome",
    "meaning": "잘생긴",
    "level": 2
  },
  {
    "word": "hang",
    "meaning": "걸다",
    "level": 1
  },
  {
    "word": "happen",
    "meaning": "일어나다",
    "level": 1
  },
  {
    "word": "happy",
    "meaning": "행복한",
    "level": 1
  },
  {
    "word": "harbor",
    "meaning": "항구",
    "level": 3
  },
  {
    "word": "hard",
    "meaning": "어려운, 열심히",
    "level": 1
  },
  {
    "word": "hardly",
    "meaning": "거의 ~않다",
    "level": 3
  },
  {
    "word": "harm",
    "meaning": "해, 해치다",
    "level": 2
  },
  {
    "word": "harmony",
    "meaning": "조화",
    "level": 3
  },
  {
    "word": "harsh",
    "meaning": "가혹한",
    "level": 3
  },
  {
    "word": "harvest",
    "meaning": "수확",
    "level": 3
  },
  {
    "word": "hate",
    "meaning": "싫어하다",
    "level": 1
  },
  {
    "word": "hatred",
    "meaning": "증오",
    "level": 3
  },
  {
    "word": "haunt",
    "meaning": "(귀신이) 나타나다, 괴롭히다",
    "level": 3
  },
  {
    "word": "head",
    "meaning": "머리",
    "level": 1
  },
  {
    "word": "headache",
    "meaning": "두통",
    "level": 2
  },
  {
    "word": "ice",
    "meaning": "얼음",
    "level": 1
  },
  {
    "word": "idea",
    "meaning": "생각",
    "level": 1
  },
  {
    "word": "ideal",
    "meaning": "이상적인",
    "level": 3
  },
  {
    "word": "identify",
    "meaning": "확인하다, 식별하다",
    "level": 2
  },
  {
    "word": "identity",
    "meaning": "정체성",
    "level": 3
  },
  {
    "word": "idle",
    "meaning": "게으른, 한가한",
    "level": 3
  },
  {
    "word": "ignore",
    "meaning": "무시하다",
    "level": 2
  },
  {
    "word": "ill",
    "meaning": "아픈",
    "level": 2
  },
  {
    "word": "illegal",
    "meaning": "불법의",
    "level": 2
  },
  {
    "word": "illness",
    "meaning": "병",
    "level": 2
  },
  {
    "word": "illustrate",
    "meaning": "설명하다, 삽화를 그리다",
    "level": 3
  },
  {
    "word": "image",
    "meaning": "이미지",
    "level": 2
  },
  {
    "word": "imagine",
    "meaning": "상상하다",
    "level": 2
  },
  {
    "word": "imitate",
    "meaning": "모방하다",
    "level": 3
  },
  {
    "word": "immediate",
    "meaning": "즉각적인",
    "level": 2
  },
  {
    "word": "immediately",
    "meaning": "즉시",
    "level": 2
  },
  {
    "word": "immigrant",
    "meaning": "이민자",
    "level": 3
  },
  {
    "word": "impact",
    "meaning": "영향",
    "level": 2
  },
  {
    "word": "imply",
    "meaning": "암시하다",
    "level": 3
  },
  {
    "word": "import",
    "meaning": "수입하다",
    "level": 3
  },
  {
    "word": "importance",
    "meaning": "중요성",
    "level": 3
  },
  {
    "word": "important",
    "meaning": "중요한",
    "level": 1
  },
  {
    "word": "impossible",
    "meaning": "불가능한",
    "level": 1
  },
  {
    "word": "impress",
    "meaning": "감명을 주다",
    "level": 2
  },
  {
    "word": "impression",
    "meaning": "인상",
    "level": 3
  },
  {
    "word": "improve",
    "meaning": "향상시키다",
    "level": 2
  },
  {
    "word": "improvement",
    "meaning": "향상, 개선",
    "level": 2
  },
  {
    "word": "jacket",
    "meaning": "재킷",
    "level": 1
  },
  {
    "word": "jail",
    "meaning": "감옥",
    "level": 2
  },
  {
    "word": "jam",
    "meaning": "잼, 혼잡",
    "level": 1
  },
  {
    "word": "jealous",
    "meaning": "질투하는",
    "level": 2
  },
  {
    "word": "jeans",
    "meaning": "청바지",
    "level": 1
  },
  {
    "word": "jewel",
    "meaning": "보석",
    "level": 3
  },
  {
    "word": "job",
    "meaning": "직업",
    "level": 1
  },
  {
    "word": "join",
    "meaning": "가입하다, 참여하다",
    "level": 1
  },
  {
    "word": "joint",
    "meaning": "공동의, 관절",
    "level": 3
  },
  {
    "word": "joke",
    "meaning": "농담",
    "level": 1
  },
  {
    "word": "journal",
    "meaning": "일지, 잡지",
    "level": 3
  },
  {
    "word": "journalist",
    "meaning": "기자",
    "level": 2
  },
  {
    "word": "journey",
    "meaning": "여행",
    "level": 2
  },
  {
    "word": "joy",
    "meaning": "기쁨",
    "level": 2
  },
  {
    "word": "judge",
    "meaning": "판사, 판단하다",
    "level": 2
  },
  {
    "word": "judgment",
    "meaning": "판단",
    "level": 3
  },
  {
    "word": "juice",
    "meaning": "주스",
    "level": 1
  },
  {
    "word": "jump",
    "meaning": "뛰다",
    "level": 1
  },
  {
    "word": "junior",
    "meaning": "손아래의, 하급의",
    "level": 3
  },
  {
    "word": "just",
    "meaning": "방금, 단지",
    "level": 1
  },
  {
    "word": "keen",
    "meaning": "예리한, 열심인",
    "level": 3
  },
  {
    "word": "keep",
    "meaning": "유지하다",
    "level": 1
  },
  {
    "word": "key",
    "meaning": "열쇠",
    "level": 1
  },
  {
    "word": "kick",
    "meaning": "차다",
    "level": 1
  },
  {
    "word": "kid",
    "meaning": "아이",
    "level": 1
  },
  {
    "word": "kill",
    "meaning": "죽이다",
    "level": 1
  },
  {
    "word": "kind",
    "meaning": "친절한, 종류",
    "level": 1
  },
  {
    "word": "kindergarten",
    "meaning": "유치원",
    "level": 1
  },
  {
    "word": "kindness",
    "meaning": "친절",
    "level": 2
  },
  {
    "word": "king",
    "meaning": "왕",
    "level": 1
  },
  {
    "word": "kingdom",
    "meaning": "왕국",
    "level": 2
  },
  {
    "word": "kiss",
    "meaning": "입맞춤, 키스하다",
    "level": 1
  },
  {
    "word": "kitchen",
    "meaning": "부엌",
    "level": 1
  },
  {
    "word": "knee",
    "meaning": "무릎",
    "level": 1
  },
  {
    "word": "kneel",
    "meaning": "무릎을 꿇다",
    "level": 3
  },
  {
    "word": "knife",
    "meaning": "칼",
    "level": 1
  },
  {
    "word": "knock",
    "meaning": "두드리다",
    "level": 2
  },
  {
    "word": "knot",
    "meaning": "매듭",
    "level": 3
  },
  {
    "word": "know",
    "meaning": "알다",
    "level": 1
  },
  {
    "word": "knowledge",
    "meaning": "지식",
    "level": 2
  },
  {
    "word": "label",
    "meaning": "상표, 라벨을 붙이다",
    "level": 3
  },
  {
    "word": "labor",
    "meaning": "노동",
    "level": 3
  },
  {
    "word": "laboratory",
    "meaning": "실험실",
    "level": 3
  },
  {
    "word": "lack",
    "meaning": "부족",
    "level": 3
  },
  {
    "word": "ladder",
    "meaning": "사다리",
    "level": 2
  },
  {
    "word": "lady",
    "meaning": "숙녀",
    "level": 1
  },
  {
    "word": "lake",
    "meaning": "호수",
    "level": 1
  },
  {
    "word": "land",
    "meaning": "땅, 착륙하다",
    "level": 2
  },
  {
    "word": "landscape",
    "meaning": "풍경",
    "level": 3
  },
  {
    "word": "language",
    "meaning": "언어",
    "level": 1
  },
  {
    "word": "large",
    "meaning": "큰",
    "level": 1
  },
  {
    "word": "last",
    "meaning": "마지막의, 지속되다",
    "level": 1
  },
  {
    "word": "late",
    "meaning": "늦은",
    "level": 1
  },
  {
    "word": "laugh",
    "meaning": "웃다",
    "level": 1
  },
  {
    "word": "launch",
    "meaning": "시작하다, 출시하다",
    "level": 2
  },
  {
    "word": "law",
    "meaning": "법",
    "level": 2
  },
  {
    "word": "lawyer",
    "meaning": "변호사",
    "level": 1
  },
  {
    "word": "lay",
    "meaning": "놓다, 눕히다",
    "level": 2
  },
  {
    "word": "layer",
    "meaning": "층",
    "level": 3
  },
  {
    "word": "lazy",
    "meaning": "게으른",
    "level": 1
  },
  {
    "word": "lead",
    "meaning": "이끌다",
    "level": 2
  },
  {
    "word": "leader",
    "meaning": "지도자",
    "level": 2
  },
  {
    "word": "leadership",
    "meaning": "리더십",
    "level": 3
  },
  {
    "word": "leaf",
    "meaning": "나뭇잎",
    "level": 1
  },
  {
    "word": "league",
    "meaning": "리그, 연맹",
    "level": 2
  },
  {
    "word": "lean",
    "meaning": "기대다, 마른",
    "level": 2
  },
  {
    "word": "leap",
    "meaning": "뛰다, 도약",
    "level": 3
  },
  {
    "word": "learn",
    "meaning": "배우다",
    "level": 1
  },
  {
    "word": "least",
    "meaning": "최소의",
    "level": 2
  },
  {
    "word": "leather",
    "meaning": "가죽",
    "level": 2
  },
  {
    "word": "leave",
    "meaning": "떠나다",
    "level": 1
  },
  {
    "word": "lecture",
    "meaning": "강의",
    "level": 3
  },
  {
    "word": "machine",
    "meaning": "기계",
    "level": 1
  },
  {
    "word": "magic",
    "meaning": "마법",
    "level": 1
  },
  {
    "word": "majority",
    "meaning": "대다수",
    "level": 3
  },
  {
    "word": "mammal",
    "meaning": "포유동물",
    "level": 2
  },
  {
    "word": "manner",
    "meaning": "방식",
    "level": 2
  },
  {
    "word": "march",
    "meaning": "행진하다",
    "level": 2
  },
  {
    "word": "marriage",
    "meaning": "결혼",
    "level": 2
  },
  {
    "word": "mass",
    "meaning": "덩어리",
    "level": 3
  },
  {
    "word": "math",
    "meaning": "수학",
    "level": 1
  },
  {
    "word": "may",
    "meaning": "해도 된다",
    "level": 1
  },
  {
    "word": "meal",
    "meaning": "식사",
    "level": 1
  },
  {
    "word": "meanwhile",
    "meaning": "그동안에",
    "level": 3
  },
  {
    "word": "medicine",
    "meaning": "약",
    "level": 1
  },
  {
    "word": "meeting",
    "meaning": "회의",
    "level": 1
  },
  {
    "word": "memory",
    "meaning": "기억",
    "level": 2
  },
  {
    "word": "merchant",
    "meaning": "상인",
    "level": 3
  },
  {
    "word": "merely",
    "meaning": "단지",
    "level": 3
  },
  {
    "word": "message",
    "meaning": "메시지",
    "level": 1
  },
  {
    "word": "might",
    "meaning": "힘",
    "level": 3
  },
  {
    "word": "military",
    "meaning": "군사의",
    "level": 2
  },
  {
    "word": "mind",
    "meaning": "마음",
    "level": 1
  },
  {
    "word": "minister",
    "meaning": "장관",
    "level": 2
  },
  {
    "word": "minute",
    "meaning": "분",
    "level": 1
  },
  {
    "word": "miserable",
    "meaning": "비참한",
    "level": 3
  },
  {
    "word": "mix",
    "meaning": "섞다",
    "level": 1
  },
  {
    "word": "mode",
    "meaning": "방식",
    "level": 3
  },
  {
    "word": "modest",
    "meaning": "겸손한",
    "level": 3
  },
  {
    "word": "month",
    "meaning": "달",
    "level": 1
  },
  {
    "word": "moral",
    "meaning": "도덕적인",
    "level": 3
  },
  {
    "word": "morning",
    "meaning": "아침",
    "level": 1
  },
  {
    "word": "motion",
    "meaning": "움직임",
    "level": 3
  },
  {
    "word": "mountain",
    "meaning": "산",
    "level": 1
  },
  {
    "word": "move",
    "meaning": "움직이다",
    "level": 1
  },
  {
    "word": "much",
    "meaning": "많은",
    "level": 1
  },
  {
    "word": "museum",
    "meaning": "박물관",
    "level": 2
  },
  {
    "word": "mutual",
    "meaning": "상호의",
    "level": 3
  },
  {
    "word": "naked",
    "meaning": "벌거벗은",
    "level": 2
  },
  {
    "word": "national",
    "meaning": "국가의",
    "level": 2
  },
  {
    "word": "nature",
    "meaning": "자연",
    "level": 1
  },
  {
    "word": "nearly",
    "meaning": "거의",
    "level": 1
  },
  {
    "word": "need",
    "meaning": "필요하다",
    "level": 1
  },
  {
    "word": "neglect",
    "meaning": "방치하다",
    "level": 3
  },
  {
    "word": "nerve",
    "meaning": "신경",
    "level": 2
  },
  {
    "word": "network",
    "meaning": "네트워크",
    "level": 2
  },
  {
    "word": "nevertheless",
    "meaning": "그럼에도 불구하고",
    "level": 3
  },
  {
    "word": "newspaper",
    "meaning": "신문",
    "level": 2
  },
  {
    "word": "night",
    "meaning": "밤",
    "level": 1
  },
  {
    "word": "nod",
    "meaning": "고개를 끄덕이다",
    "level": 2
  },
  {
    "word": "none",
    "meaning": "아무것도 ~않다",
    "level": 1
  },
  {
    "word": "north",
    "meaning": "북쪽",
    "level": 1
  },
  {
    "word": "nothing",
    "meaning": "아무것도 ~않다",
    "level": 1
  },
  {
    "word": "novel",
    "meaning": "소설",
    "level": 2
  },
  {
    "word": "nuclear",
    "meaning": "핵의",
    "level": 2
  },
  {
    "word": "nut",
    "meaning": "견과",
    "level": 1
  },
  {
    "word": "object",
    "meaning": "물체",
    "level": 3
  },
  {
    "word": "obligation",
    "meaning": "의무",
    "level": 3
  },
  {
    "word": "obtain",
    "meaning": "얻다",
    "level": 3
  },
  {
    "word": "occasion",
    "meaning": "경우",
    "level": 3
  },
  {
    "word": "occupy",
    "meaning": "차지하다",
    "level": 3
  },
  {
    "word": "off",
    "meaning": "떨어져",
    "level": 1
  },
  {
    "word": "offer",
    "meaning": "제안하다",
    "level": 1
  },
  {
    "word": "official",
    "meaning": "공식적인",
    "level": 2
  },
  {
    "word": "old",
    "meaning": "오래된",
    "level": 1
  },
  {
    "word": "ongoing",
    "meaning": "진행 중인",
    "level": 2
  },
  {
    "word": "onto",
    "meaning": "~위로",
    "level": 1
  },
  {
    "word": "operation",
    "meaning": "작동",
    "level": 2
  },
  {
    "word": "oppose",
    "meaning": "반대하다",
    "level": 3
  },
  {
    "word": "oral",
    "meaning": "구두의",
    "level": 3
  },
  {
    "word": "order",
    "meaning": "명령하다",
    "level": 2
  },
  {
    "word": "organization",
    "meaning": "조직",
    "level": 3
  },
  {
    "word": "original",
    "meaning": "원래의",
    "level": 2
  },
  {
    "word": "otherwise",
    "meaning": "그렇지 않으면",
    "level": 3
  },
  {
    "word": "outdoor",
    "meaning": "야외의",
    "level": 1
  },
  {
    "word": "outside",
    "meaning": "밖에",
    "level": 1
  },
  {
    "word": "over",
    "meaning": "~위에",
    "level": 1
  },
  {
    "word": "overseas",
    "meaning": "해외의",
    "level": 2
  },
  {
    "word": "own",
    "meaning": "소유하다",
    "level": 2
  },
  {
    "word": "pace",
    "meaning": "속도",
    "level": 2
  },
  {
    "word": "pain",
    "meaning": "고통",
    "level": 1
  },
  {
    "word": "painting",
    "meaning": "그림",
    "level": 1
  },
  {
    "word": "pale",
    "meaning": "창백한",
    "level": 2
  },
  {
    "word": "paper",
    "meaning": "종이",
    "level": 1
  },
  {
    "word": "park",
    "meaning": "공원",
    "level": 1
  },
  {
    "word": "particular",
    "meaning": "특정한",
    "level": 2
  },
  {
    "word": "partner",
    "meaning": "동반자",
    "level": 2
  },
  {
    "word": "passenger",
    "meaning": "승객",
    "level": 2
  },
  {
    "word": "past",
    "meaning": "과거",
    "level": 2
  },
  {
    "word": "patient",
    "meaning": "환자",
    "level": 2
  },
  {
    "word": "payment",
    "meaning": "지불",
    "level": 2
  },
  {
    "word": "peak",
    "meaning": "정상",
    "level": 2
  },
  {
    "word": "penalty",
    "meaning": "벌칙",
    "level": 2
  },
  {
    "word": "percent",
    "meaning": "퍼센트",
    "level": 2
  },
  {
    "word": "performance",
    "meaning": "공연",
    "level": 2
  },
  {
    "word": "permanent",
    "meaning": "영구적인",
    "level": 2
  },
  {
    "word": "person",
    "meaning": "사람",
    "level": 1
  },
  {
    "word": "perspective",
    "meaning": "관점",
    "level": 3
  },
  {
    "word": "phenomenon",
    "meaning": "현상",
    "level": 3
  },
  {
    "word": "phrase",
    "meaning": "구절",
    "level": 2
  },
  {
    "word": "physics",
    "meaning": "물리학",
    "level": 2
  },
  {
    "word": "piece",
    "meaning": "조각",
    "level": 1
  },
  {
    "word": "pin",
    "meaning": "핀",
    "level": 1
  },
  {
    "word": "pipe",
    "meaning": "파이프",
    "level": 1
  },
  {
    "word": "plain",
    "meaning": "분명한",
    "level": 2
  },
  {
    "word": "planet",
    "meaning": "행성",
    "level": 1
  },
  {
    "word": "platform",
    "meaning": "플랫폼",
    "level": 1
  },
  {
    "word": "pleasant",
    "meaning": "즐거운",
    "level": 2
  },
  {
    "word": "plenty",
    "meaning": "충분한 양",
    "level": 2
  },
  {
    "word": "poem",
    "meaning": "시",
    "level": 1
  },
  {
    "word": "poison",
    "meaning": "독",
    "level": 2
  },
  {
    "word": "policy",
    "meaning": "정책",
    "level": 3
  },
  {
    "word": "politics",
    "meaning": "정치",
    "level": 3
  },
  {
    "word": "pollution",
    "meaning": "오염",
    "level": 2
  },
  {
    "word": "poor",
    "meaning": "가난한",
    "level": 1
  },
  {
    "word": "portion",
    "meaning": "부분",
    "level": 3
  },
  {
    "word": "position",
    "meaning": "위치",
    "level": 2
  },
  {
    "word": "possession",
    "meaning": "소유",
    "level": 3
  },
  {
    "word": "post",
    "meaning": "게시하다",
    "level": 1
  },
  {
    "word": "potential",
    "meaning": "잠재적인",
    "level": 3
  },
  {
    "word": "powder",
    "meaning": "가루",
    "level": 2
  },
  {
    "word": "practical",
    "meaning": "실용적인",
    "level": 2
  },
  {
    "word": "precious",
    "meaning": "귀중한",
    "level": 2
  },
  {
    "word": "prefer",
    "meaning": "선호하다",
    "level": 2
  },
  {
    "word": "prepare",
    "meaning": "준비하다",
    "level": 2
  },
  {
    "word": "president",
    "meaning": "대통령",
    "level": 2
  },
  {
    "word": "pretend",
    "meaning": "~인 척하다",
    "level": 2
  },
  {
    "word": "previous",
    "meaning": "이전의",
    "level": 2
  },
  {
    "word": "pride",
    "meaning": "자부심",
    "level": 2
  },
  {
    "word": "prime",
    "meaning": "최고의",
    "level": 3
  },
  {
    "word": "principle",
    "meaning": "원칙",
    "level": 3
  },
  {
    "word": "prison",
    "meaning": "감옥",
    "level": 2
  },
  {
    "word": "private",
    "meaning": "사적인",
    "level": 2
  },
  {
    "word": "probably",
    "meaning": "아마",
    "level": 1
  },
  {
    "word": "process",
    "meaning": "과정",
    "level": 3
  },
  {
    "word": "production",
    "meaning": "생산",
    "level": 2
  },
  {
    "word": "professor",
    "meaning": "교수",
    "level": 2
  },
  {
    "word": "progress",
    "meaning": "진보",
    "level": 3
  },
  {
    "word": "prominent",
    "meaning": "저명한",
    "level": 3
  },
  {
    "word": "prompt",
    "meaning": "즉각적인",
    "level": 3
  },
  {
    "word": "properly",
    "meaning": "적절히",
    "level": 2
  },
  {
    "word": "propose",
    "meaning": "제안하다",
    "level": 3
  },
  {
    "word": "protection",
    "meaning": "보호",
    "level": 2
  },
  {
    "word": "proud",
    "meaning": "자랑스러운",
    "level": 1
  },
  {
    "word": "province",
    "meaning": "지방",
    "level": 3
  },
  {
    "word": "public",
    "meaning": "대중의",
    "level": 2
  },
  {
    "word": "pulse",
    "meaning": "맥박",
    "level": 3
  },
  {
    "word": "purchase",
    "meaning": "구매하다",
    "level": 3
  },
  {
    "word": "purpose",
    "meaning": "목적",
    "level": 2
  },
  {
    "word": "put",
    "meaning": "놓다",
    "level": 1
  },
  {
    "word": "quarrel",
    "meaning": "다투다",
    "level": 3
  },
  {
    "word": "question",
    "meaning": "질문",
    "level": 1
  },
  {
    "word": "quiet",
    "meaning": "조용한",
    "level": 1
  },
  {
    "word": "race",
    "meaning": "경주",
    "level": 1
  },
  {
    "word": "rail",
    "meaning": "철도",
    "level": 2
  },
  {
    "word": "range",
    "meaning": "범위",
    "level": 2
  },
  {
    "word": "rarely",
    "meaning": "거의 ~않다",
    "level": 2
  },
  {
    "word": "ratio",
    "meaning": "비율",
    "level": 3
  },
  {
    "word": "react",
    "meaning": "반응하다",
    "level": 2
  },
  {
    "word": "ready",
    "meaning": "준비된",
    "level": 1
  },
  {
    "word": "realize",
    "meaning": "깨닫다",
    "level": 1
  },
  {
    "word": "reason",
    "meaning": "이유",
    "level": 1
  },
  {
    "word": "receive",
    "meaning": "받다",
    "level": 1
  },
  {
    "word": "recognize",
    "meaning": "알아보다",
    "level": 2
  },
  {
    "word": "recover",
    "meaning": "회복하다",
    "level": 2
  },
  {
    "word": "red",
    "meaning": "빨간색",
    "level": 1
  },
  {
    "word": "reference",
    "meaning": "참고",
    "level": 3
  },
  {
    "word": "refrigerator",
    "meaning": "냉장고",
    "level": 2
  },
  {
    "word": "region",
    "meaning": "지역",
    "level": 2
  },
  {
    "word": "regular",
    "meaning": "규칙적인",
    "level": 2
  },
  {
    "word": "regulation",
    "meaning": "규정",
    "level": 3
  },
  {
    "word": "relation",
    "meaning": "관계",
    "level": 3
  },
  {
    "word": "relax",
    "meaning": "휴식을 취하다",
    "level": 1
  },
  {
    "word": "reliable",
    "meaning": "믿을 만한",
    "level": 2
  },
  {
    "word": "religion",
    "meaning": "종교",
    "level": 2
  },
  {
    "word": "remain",
    "meaning": "남다",
    "level": 3
  },
  {
    "word": "remember",
    "meaning": "기억하다",
    "level": 1
  },
  {
    "word": "remove",
    "meaning": "제거하다",
    "level": 1
  },
  {
    "word": "repair",
    "meaning": "수리하다",
    "level": 1
  },
  {
    "word": "report",
    "meaning": "보고하다",
    "level": 1
  },
  {
    "word": "reputation",
    "meaning": "평판",
    "level": 3
  },
  {
    "word": "requirement",
    "meaning": "요구 사항",
    "level": 3
  },
  {
    "word": "reserve",
    "meaning": "예약하다",
    "level": 3
  },
  {
    "word": "resistance",
    "meaning": "저항",
    "level": 3
  },
  {
    "word": "respect",
    "meaning": "존중하다",
    "level": 2
  },
  {
    "word": "responsibility",
    "meaning": "책임",
    "level": 3
  },
  {
    "word": "restaurant",
    "meaning": "식당",
    "level": 2
  },
  {
    "word": "restriction",
    "meaning": "제한",
    "level": 3
  },
  {
    "word": "reveal",
    "meaning": "드러내다",
    "level": 3
  },
  {
    "word": "review",
    "meaning": "검토하다",
    "level": 2
  },
  {
    "word": "rhythm",
    "meaning": "리듬",
    "level": 2
  },
  {
    "word": "ride",
    "meaning": "타다",
    "level": 1
  },
  {
    "word": "rigid",
    "meaning": "엄격한",
    "level": 3
  },
  {
    "word": "risk",
    "meaning": "위험",
    "level": 2
  },
  {
    "word": "road",
    "meaning": "도로",
    "level": 1
  },
  {
    "word": "rock",
    "meaning": "바위",
    "level": 1
  },
  {
    "word": "romantic",
    "meaning": "낭만적인",
    "level": 2
  },
  {
    "word": "root",
    "meaning": "뿌리",
    "level": 1
  },
  {
    "word": "round",
    "meaning": "둥근",
    "level": 1
  },
  {
    "word": "row",
    "meaning": "줄",
    "level": 1
  },
  {
    "word": "rude",
    "meaning": "무례한",
    "level": 2
  },
  {
    "word": "run",
    "meaning": "달리다",
    "level": 1
  },
  {
    "word": "sad",
    "meaning": "슬픈",
    "level": 1
  },
  {
    "word": "safe",
    "meaning": "안전한",
    "level": 1
  },
  {
    "word": "safety",
    "meaning": "안전",
    "level": 2
  },
  {
    "word": "sail",
    "meaning": "항해하다",
    "level": 2
  },
  {
    "word": "salad",
    "meaning": "샐러드",
    "level": 2
  },
  {
    "word": "salary",
    "meaning": "월급",
    "level": 3
  },
  {
    "word": "sale",
    "meaning": "판매",
    "level": 2
  },
  {
    "word": "salt",
    "meaning": "소금",
    "level": 1
  },
  {
    "word": "same",
    "meaning": "같은",
    "level": 1
  },
  {
    "word": "sample",
    "meaning": "견본",
    "level": 2
  },
  {
    "word": "sand",
    "meaning": "모래",
    "level": 1
  },
  {
    "word": "satisfy",
    "meaning": "만족시키다",
    "level": 3
  },
  {
    "word": "save",
    "meaning": "구하다",
    "level": 1
  },
  {
    "word": "say",
    "meaning": "말하다",
    "level": 1
  },
  {
    "word": "scare",
    "meaning": "겁주다",
    "level": 1
  },
  {
    "word": "scared",
    "meaning": "무서워하는",
    "level": 1
  },
  {
    "word": "scene",
    "meaning": "장면",
    "level": 2
  },
  {
    "word": "schedule",
    "meaning": "일정",
    "level": 3
  },
  {
    "word": "science",
    "meaning": "과학",
    "level": 2
  },
  {
    "word": "scientist",
    "meaning": "과학자",
    "level": 2
  },
  {
    "word": "score",
    "meaning": "점수",
    "level": 2
  },
  {
    "word": "scream",
    "meaning": "비명을 지르다",
    "level": 2
  },
  {
    "word": "screen",
    "meaning": "화면",
    "level": 2
  },
  {
    "word": "sea",
    "meaning": "바다",
    "level": 1
  },
  {
    "word": "search",
    "meaning": "찾다",
    "level": 1
  },
  {
    "word": "season",
    "meaning": "계절",
    "level": 1
  },
  {
    "word": "seat",
    "meaning": "좌석",
    "level": 1
  },
  {
    "word": "second",
    "meaning": "두 번째의",
    "level": 1
  },
  {
    "word": "secret",
    "meaning": "비밀",
    "level": 2
  },
  {
    "word": "section",
    "meaning": "부분",
    "level": 3
  },
  {
    "word": "secure",
    "meaning": "안전한",
    "level": 3
  },
  {
    "word": "see",
    "meaning": "보다",
    "level": 1
  },
  {
    "word": "seed",
    "meaning": "씨앗",
    "level": 2
  },
  {
    "word": "seek",
    "meaning": "찾다",
    "level": 3
  },
  {
    "word": "seem",
    "meaning": "~처럼 보이다",
    "level": 2
  },
  {
    "word": "select",
    "meaning": "선택하다",
    "level": 3
  },
  {
    "word": "sell",
    "meaning": "팔다",
    "level": 2
  },
  {
    "word": "send",
    "meaning": "보내다",
    "level": 1
  },
  {
    "word": "senior",
    "meaning": "손위의",
    "level": 3
  },
  {
    "word": "sense",
    "meaning": "감각",
    "level": 2
  },
  {
    "word": "sentence",
    "meaning": "문장",
    "level": 3
  },
  {
    "word": "separate",
    "meaning": "분리하다",
    "level": 3
  },
  {
    "word": "series",
    "meaning": "연속",
    "level": 3
  },
  {
    "word": "serious",
    "meaning": "심각한",
    "level": 2
  },
  {
    "word": "serve",
    "meaning": "봉사하다",
    "level": 3
  },
  {
    "word": "service",
    "meaning": "서비스",
    "level": 3
  },
  {
    "word": "set",
    "meaning": "놓다",
    "level": 1
  },
  {
    "word": "settle",
    "meaning": "정착하다",
    "level": 3
  },
  {
    "word": "several",
    "meaning": "몇몇의",
    "level": 2
  },
  {
    "word": "severe",
    "meaning": "심한",
    "level": 3
  },
  {
    "word": "shadow",
    "meaning": "그림자",
    "level": 2
  },
  {
    "word": "shake",
    "meaning": "흔들다",
    "level": 1
  },
  {
    "word": "shall",
    "meaning": "~할 것이다",
    "level": 3
  },
  {
    "word": "shame",
    "meaning": "수치심",
    "level": 3
  },
  {
    "word": "shape",
    "meaning": "모양",
    "level": 1
  },
  {
    "word": "share",
    "meaning": "공유하다",
    "level": 1
  },
  {
    "word": "sharp",
    "meaning": "날카로운",
    "level": 2
  },
  {
    "word": "she",
    "meaning": "그녀",
    "level": 1
  },
  {
    "word": "sheep",
    "meaning": "양",
    "level": 1
  },
  {
    "word": "sheet",
    "meaning": "종이 한 장",
    "level": 2
  },
  {
    "word": "shelf",
    "meaning": "선반",
    "level": 2
  },
  {
    "word": "shell",
    "meaning": "껍질",
    "level": 2
  },
  {
    "word": "shelter",
    "meaning": "피난처",
    "level": 3
  },
  {
    "word": "shine",
    "meaning": "빛나다",
    "level": 2
  },
  {
    "word": "ship",
    "meaning": "배",
    "level": 2
  },
  {
    "word": "shirt",
    "meaning": "셔츠",
    "level": 1
  },
  {
    "word": "shock",
    "meaning": "충격",
    "level": 3
  },
  {
    "word": "shoe",
    "meaning": "신발",
    "level": 1
  },
  {
    "word": "shoot",
    "meaning": "쏘다",
    "level": 2
  },
  {
    "word": "shop",
    "meaning": "가게",
    "level": 2
  },
  {
    "word": "shore",
    "meaning": "해안",
    "level": 3
  },
  {
    "word": "table",
    "meaning": "탁자",
    "level": 1
  },
  {
    "word": "tail",
    "meaning": "꼬리",
    "level": 1
  },
  {
    "word": "take",
    "meaning": "잡다",
    "level": 1
  },
  {
    "word": "tale",
    "meaning": "이야기",
    "level": 2
  },
  {
    "word": "talent",
    "meaning": "재능",
    "level": 2
  },
  {
    "word": "talk",
    "meaning": "말하다",
    "level": 1
  },
  {
    "word": "tall",
    "meaning": "키가 큰",
    "level": 1
  },
  {
    "word": "tank",
    "meaning": "탱크",
    "level": 3
  },
  {
    "word": "target",
    "meaning": "목표",
    "level": 2
  },
  {
    "word": "task",
    "meaning": "과제",
    "level": 2
  },
  {
    "word": "taste",
    "meaning": "맛",
    "level": 2
  },
  {
    "word": "tax",
    "meaning": "세금",
    "level": 3
  },
  {
    "word": "taxi",
    "meaning": "택시",
    "level": 1
  },
  {
    "word": "tea",
    "meaning": "차",
    "level": 1
  },
  {
    "word": "teach",
    "meaning": "가르치다",
    "level": 2
  },
  {
    "word": "teacher",
    "meaning": "선생님",
    "level": 1
  },
  {
    "word": "team",
    "meaning": "팀",
    "level": 1
  },
  {
    "word": "tear",
    "meaning": "눈물",
    "level": 2
  },
  {
    "word": "technology",
    "meaning": "기술",
    "level": 3
  },
  {
    "word": "teenager",
    "meaning": "십대",
    "level": 2
  },
  {
    "word": "telephone",
    "meaning": "전화기",
    "level": 2
  },
  {
    "word": "television",
    "meaning": "텔레비전",
    "level": 2
  },
  {
    "word": "tell",
    "meaning": "말하다",
    "level": 1
  },
  {
    "word": "temperature",
    "meaning": "온도",
    "level": 3
  },
  {
    "word": "temple",
    "meaning": "사원",
    "level": 3
  },
  {
    "word": "tend",
    "meaning": "경향이 있다",
    "level": 3
  },
  {
    "word": "tent",
    "meaning": "텐트",
    "level": 1
  },
  {
    "word": "term",
    "meaning": "용어",
    "level": 3
  },
  {
    "word": "terrible",
    "meaning": "끔찍한",
    "level": 3
  },
  {
    "word": "test",
    "meaning": "시험",
    "level": 1
  },
  {
    "word": "text",
    "meaning": "글",
    "level": 2
  },
  {
    "word": "thank",
    "meaning": "감사하다",
    "level": 1
  },
  {
    "word": "theater",
    "meaning": "극장",
    "level": 3
  },
  {
    "word": "theory",
    "meaning": "이론",
    "level": 3
  },
  {
    "word": "there",
    "meaning": "거기에",
    "level": 1
  },
  {
    "word": "thick",
    "meaning": "두꺼운",
    "level": 3
  },
  {
    "word": "thief",
    "meaning": "도둑",
    "level": 3
  },
  {
    "word": "thin",
    "meaning": "얇은",
    "level": 1
  },
  {
    "word": "thing",
    "meaning": "것",
    "level": 1
  },
  {
    "word": "think",
    "meaning": "생각하다",
    "level": 1
  },
  {
    "word": "thirsty",
    "meaning": "목마른",
    "level": 1
  },
  {
    "word": "though",
    "meaning": "비록 ~이지만",
    "level": 2
  },
  {
    "word": "thought",
    "meaning": "생각",
    "level": 3
  },
  {
    "word": "thousand",
    "meaning": "천",
    "level": 2
  },
  {
    "word": "thread",
    "meaning": "실",
    "level": 3
  },
  {
    "word": "threat",
    "meaning": "위협",
    "level": 3
  },
  {
    "word": "throat",
    "meaning": "목구멍",
    "level": 2
  },
  {
    "word": "through",
    "meaning": "~을 통해",
    "level": 1
  },
  {
    "word": "throw",
    "meaning": "던지다",
    "level": 1
  },
  {
    "word": "thumb",
    "meaning": "엄지손가락",
    "level": 2
  },
  {
    "word": "ticket",
    "meaning": "표",
    "level": 1
  },
  {
    "word": "tie",
    "meaning": "넥타이",
    "level": 3
  },
  {
    "word": "tight",
    "meaning": "꽉 조이는",
    "level": 2
  },
  {
    "word": "time",
    "meaning": "시간",
    "level": 1
  },
  {
    "word": "tiny",
    "meaning": "아주 작은",
    "level": 2
  },
  {
    "word": "ugly",
    "meaning": "못생긴",
    "level": 2
  },
  {
    "word": "umbrella",
    "meaning": "우산",
    "level": 1
  },
  {
    "word": "uncle",
    "meaning": "삼촌",
    "level": 1
  },
  {
    "word": "under",
    "meaning": "~아래에",
    "level": 1
  },
  {
    "word": "understand",
    "meaning": "이해하다",
    "level": 2
  },
  {
    "word": "uniform",
    "meaning": "교복",
    "level": 3
  },
  {
    "word": "union",
    "meaning": "연합",
    "level": 3
  },
  {
    "word": "unique",
    "meaning": "독특한",
    "level": 3
  },
  {
    "word": "unit",
    "meaning": "단위",
    "level": 3
  },
  {
    "word": "unite",
    "meaning": "통합하다",
    "level": 3
  },
  {
    "word": "universe",
    "meaning": "우주",
    "level": 3
  },
  {
    "word": "university",
    "meaning": "대학교",
    "level": 2
  },
  {
    "word": "unless",
    "meaning": "~하지 않는다면",
    "level": 2
  },
  {
    "word": "until",
    "meaning": "~까지",
    "level": 2
  },
  {
    "word": "unusual",
    "meaning": "특이한",
    "level": 3
  },
  {
    "word": "vacation",
    "meaning": "방학",
    "level": 2
  },
  {
    "word": "valley",
    "meaning": "계곡",
    "level": 2
  },
  {
    "word": "valuable",
    "meaning": "귀중한",
    "level": 3
  },
  {
    "word": "value",
    "meaning": "가치",
    "level": 3
  },
  {
    "word": "van",
    "meaning": "밴",
    "level": 1
  },
  {
    "word": "various",
    "meaning": "다양한",
    "level": 3
  },
  {
    "word": "vary",
    "meaning": "다르다",
    "level": 3
  },
  {
    "word": "vast",
    "meaning": "광대한",
    "level": 3
  },
  {
    "word": "vegetable",
    "meaning": "채소",
    "level": 1
  },
  {
    "word": "vehicle",
    "meaning": "차량",
    "level": 3
  },
  {
    "word": "version",
    "meaning": "버전",
    "level": 2
  },
  {
    "word": "very",
    "meaning": "매우",
    "level": 1
  },
  {
    "word": "victim",
    "meaning": "희생자",
    "level": 3
  },
  {
    "word": "victory",
    "meaning": "승리",
    "level": 3
  },
  {
    "word": "video",
    "meaning": "영상",
    "level": 2
  },
  {
    "word": "view",
    "meaning": "경치",
    "level": 2
  },
  {
    "word": "village",
    "meaning": "마을",
    "level": 2
  },
  {
    "word": "violent",
    "meaning": "폭력적인",
    "level": 3
  },
  {
    "word": "visit",
    "meaning": "방문하다",
    "level": 1
  },
  {
    "word": "voice",
    "meaning": "목소리",
    "level": 2
  },
  {
    "word": "wage",
    "meaning": "임금",
    "level": 3
  },
  {
    "word": "wait",
    "meaning": "기다리다",
    "level": 2
  },
  {
    "word": "wake",
    "meaning": "깨다",
    "level": 1
  },
  {
    "word": "walk",
    "meaning": "걷다",
    "level": 1
  },
  {
    "word": "wall",
    "meaning": "벽",
    "level": 1
  },
  {
    "word": "want",
    "meaning": "원하다",
    "level": 1
  },
  {
    "word": "war",
    "meaning": "전쟁",
    "level": 2
  },
  {
    "word": "warm",
    "meaning": "따뜻한",
    "level": 1
  },
  {
    "word": "warn",
    "meaning": "경고하다",
    "level": 2
  },
  {
    "word": "wash",
    "meaning": "씻다",
    "level": 1
  },
  {
    "word": "waste",
    "meaning": "낭비하다",
    "level": 3
  },
  {
    "word": "watch",
    "meaning": "보다",
    "level": 1
  },
  {
    "word": "water",
    "meaning": "물",
    "level": 1
  },
  {
    "word": "wave",
    "meaning": "파도",
    "level": 2
  },
  {
    "word": "way",
    "meaning": "방법",
    "level": 1
  },
  {
    "word": "weak",
    "meaning": "약한",
    "level": 2
  },
  {
    "word": "wealth",
    "meaning": "부",
    "level": 3
  },
  {
    "word": "weapon",
    "meaning": "무기",
    "level": 3
  },
  {
    "word": "wear",
    "meaning": "입다",
    "level": 2
  },
  {
    "word": "weather",
    "meaning": "날씨",
    "level": 1
  },
  {
    "word": "week",
    "meaning": "주",
    "level": 1
  },
  {
    "word": "weigh",
    "meaning": "무게를 재다",
    "level": 3
  },
  {
    "word": "weight",
    "meaning": "무게",
    "level": 3
  },
  {
    "word": "welcome",
    "meaning": "환영하다",
    "level": 2
  },
  {
    "word": "west",
    "meaning": "서쪽",
    "level": 2
  },
  {
    "word": "x-ray",
    "meaning": "엑스레이",
    "level": 1
  },
  {
    "word": "xylophone",
    "meaning": "실로폰",
    "level": 2
  },
  {
    "word": "yard",
    "meaning": "마당",
    "level": 2
  },
  {
    "word": "yawn",
    "meaning": "하품하다",
    "level": 2
  },
  {
    "word": "year",
    "meaning": "년",
    "level": 1
  },
  {
    "word": "yell",
    "meaning": "소리치다",
    "level": 2
  },
  {
    "word": "yellow",
    "meaning": "노란색",
    "level": 1
  },
  {
    "word": "yesterday",
    "meaning": "어제",
    "level": 2
  },
  {
    "word": "young",
    "meaning": "젊은",
    "level": 1
  },
  {
    "word": "youth",
    "meaning": "젊음",
    "level": 3
  },
  {
    "word": "zebra",
    "meaning": "얼룩말",
    "level": 1
  },
  {
    "word": "zero",
    "meaning": "영",
    "level": 2
  },
  {
    "word": "zone",
    "meaning": "지역",
    "level": 3
  },
  {
    "word": "zoo",
    "meaning": "동물원",
    "level": 1
  }
];

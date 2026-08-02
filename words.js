const WORDS = [
  {
    "word": "abandon",
    "meaning": "버리다, 포기하다"
  },
  {
    "word": "ability",
    "meaning": "능력"
  },
  {
    "word": "able",
    "meaning": "할 수 있는"
  },
  {
    "word": "abroad",
    "meaning": "해외로, 해외에서"
  },
  {
    "word": "absence",
    "meaning": "부재, 결석"
  },
  {
    "word": "absent",
    "meaning": "결석한, 없는"
  },
  {
    "word": "absolute",
    "meaning": "완전한, 절대적인"
  },
  {
    "word": "absorb",
    "meaning": "흡수하다"
  },
  {
    "word": "abstract",
    "meaning": "추상적인"
  },
  {
    "word": "absurd",
    "meaning": "터무니없는, 불합리한"
  },
  {
    "word": "abuse",
    "meaning": "남용하다, 학대하다"
  },
  {
    "word": "accent",
    "meaning": "억양, 강세"
  },
  {
    "word": "accept",
    "meaning": "받아들이다, 수락하다"
  },
  {
    "word": "access",
    "meaning": "접근, 접근하다"
  },
  {
    "word": "accident",
    "meaning": "사고"
  },
  {
    "word": "accompany",
    "meaning": "동반하다, 동행하다"
  },
  {
    "word": "accomplish",
    "meaning": "성취하다, 완수하다"
  },
  {
    "word": "according",
    "meaning": "~에 따르면"
  },
  {
    "word": "account",
    "meaning": "계좌, 설명, 이유"
  },
  {
    "word": "accurate",
    "meaning": "정확한"
  },
  {
    "word": "accuse",
    "meaning": "비난하다, 고발하다"
  },
  {
    "word": "achieve",
    "meaning": "성취하다, 이루다"
  },
  {
    "word": "achievement",
    "meaning": "성취, 업적"
  },
  {
    "word": "acid",
    "meaning": "산성의, 산"
  },
  {
    "word": "acquire",
    "meaning": "습득하다, 얻다"
  },
  {
    "word": "across",
    "meaning": "가로질러, 건너서"
  },
  {
    "word": "act",
    "meaning": "행동하다, 연기하다"
  },
  {
    "word": "action",
    "meaning": "행동, 조치"
  },
  {
    "word": "active",
    "meaning": "활동적인"
  },
  {
    "word": "activity",
    "meaning": "활동"
  },
  {
    "word": "actor",
    "meaning": "배우"
  },
  {
    "word": "actual",
    "meaning": "실제의"
  },
  {
    "word": "actually",
    "meaning": "실제로"
  },
  {
    "word": "adapt",
    "meaning": "적응하다, 맞추다"
  },
  {
    "word": "add",
    "meaning": "더하다, 추가하다"
  },
  {
    "word": "addition",
    "meaning": "추가, 덧셈"
  },
  {
    "word": "address",
    "meaning": "주소, 연설하다"
  },
  {
    "word": "adequate",
    "meaning": "충분한, 적절한"
  },
  {
    "word": "adjust",
    "meaning": "조정하다, 적응하다"
  },
  {
    "word": "admire",
    "meaning": "감탄하다, 존경하다"
  },
  {
    "word": "admit",
    "meaning": "인정하다, 허락하다"
  },
  {
    "word": "adopt",
    "meaning": "채택하다, 입양하다"
  },
  {
    "word": "adult",
    "meaning": "성인, 어른"
  },
  {
    "word": "advance",
    "meaning": "전진하다, 진보"
  },
  {
    "word": "advantage",
    "meaning": "이점, 장점"
  },
  {
    "word": "adventure",
    "meaning": "모험"
  },
  {
    "word": "advertise",
    "meaning": "광고하다"
  },
  {
    "word": "advice",
    "meaning": "충고, 조언"
  },
  {
    "word": "advise",
    "meaning": "충고하다, 조언하다"
  },
  {
    "word": "affect",
    "meaning": "영향을 미치다"
  },
  {
    "word": "baby",
    "meaning": "아기"
  },
  {
    "word": "background",
    "meaning": "배경"
  },
  {
    "word": "bake",
    "meaning": "굽다"
  },
  {
    "word": "balance",
    "meaning": "균형, 잔액"
  },
  {
    "word": "ball",
    "meaning": "공"
  },
  {
    "word": "ban",
    "meaning": "금지하다"
  },
  {
    "word": "band",
    "meaning": "밴드, 무리, 띠"
  },
  {
    "word": "bank",
    "meaning": "은행, 둑"
  },
  {
    "word": "bar",
    "meaning": "막대, 술집"
  },
  {
    "word": "bare",
    "meaning": "벌거벗은, 맨"
  },
  {
    "word": "bargain",
    "meaning": "흥정하다, 싸게 사는 물건"
  },
  {
    "word": "barrier",
    "meaning": "장벽, 장애물"
  },
  {
    "word": "base",
    "meaning": "기초, 기반, 근거지"
  },
  {
    "word": "basic",
    "meaning": "기본적인"
  },
  {
    "word": "basis",
    "meaning": "기초, 근거"
  },
  {
    "word": "battle",
    "meaning": "전투, 싸움"
  },
  {
    "word": "bear",
    "meaning": "견디다, 곰"
  },
  {
    "word": "beat",
    "meaning": "이기다, 때리다"
  },
  {
    "word": "beautiful",
    "meaning": "아름다운"
  },
  {
    "word": "beauty",
    "meaning": "아름다움, 미인"
  },
  {
    "word": "because",
    "meaning": "왜냐하면, ~때문에"
  },
  {
    "word": "become",
    "meaning": "~이 되다"
  },
  {
    "word": "before",
    "meaning": "~전에"
  },
  {
    "word": "begin",
    "meaning": "시작하다"
  },
  {
    "word": "beginning",
    "meaning": "시작, 처음"
  },
  {
    "word": "behave",
    "meaning": "행동하다"
  },
  {
    "word": "behavior",
    "meaning": "행동, 태도"
  },
  {
    "word": "behind",
    "meaning": "~뒤에"
  },
  {
    "word": "belief",
    "meaning": "믿음, 신념"
  },
  {
    "word": "believe",
    "meaning": "믿다"
  },
  {
    "word": "belong",
    "meaning": "속하다"
  },
  {
    "word": "below",
    "meaning": "아래에"
  },
  {
    "word": "bend",
    "meaning": "구부리다"
  },
  {
    "word": "beneath",
    "meaning": "~아래에"
  },
  {
    "word": "benefit",
    "meaning": "이익, 혜택"
  },
  {
    "word": "beside",
    "meaning": "~옆에"
  },
  {
    "word": "besides",
    "meaning": "게다가, ~외에"
  },
  {
    "word": "between",
    "meaning": "~사이에"
  },
  {
    "word": "beyond",
    "meaning": "~너머, ~을 넘어서"
  },
  {
    "word": "bill",
    "meaning": "청구서, 지폐, 법안"
  },
  {
    "word": "billion",
    "meaning": "10억"
  },
  {
    "word": "bind",
    "meaning": "묶다, 결속시키다"
  },
  {
    "word": "bit",
    "meaning": "조금, 약간"
  },
  {
    "word": "bite",
    "meaning": "물다"
  },
  {
    "word": "bitter",
    "meaning": "쓴, 쓰라린"
  },
  {
    "word": "blame",
    "meaning": "비난하다, 탓하다"
  },
  {
    "word": "blank",
    "meaning": "빈, 공백의"
  },
  {
    "word": "blend",
    "meaning": "섞다, 혼합하다"
  },
  {
    "word": "blind",
    "meaning": "눈이 먼"
  },
  {
    "word": "block",
    "meaning": "막다, 구역, 블록"
  },
  {
    "word": "calculate",
    "meaning": "계산하다"
  },
  {
    "word": "campaign",
    "meaning": "캠페인, 운동"
  },
  {
    "word": "cancel",
    "meaning": "취소하다"
  },
  {
    "word": "candidate",
    "meaning": "후보자"
  },
  {
    "word": "capable",
    "meaning": "~할 수 있는, 유능한"
  },
  {
    "word": "capacity",
    "meaning": "수용력, 능력"
  },
  {
    "word": "capital",
    "meaning": "수도, 자본, 대문자"
  },
  {
    "word": "capture",
    "meaning": "붙잡다, 포획하다"
  },
  {
    "word": "career",
    "meaning": "직업, 경력"
  },
  {
    "word": "careful",
    "meaning": "조심스러운, 주의 깊은"
  },
  {
    "word": "carry",
    "meaning": "나르다, 운반하다"
  },
  {
    "word": "case",
    "meaning": "경우, 사례, 상자"
  },
  {
    "word": "category",
    "meaning": "범주, 부류"
  },
  {
    "word": "cause",
    "meaning": "원인, 야기하다"
  },
  {
    "word": "celebrate",
    "meaning": "축하하다"
  },
  {
    "word": "celebration",
    "meaning": "축하, 기념 행사"
  },
  {
    "word": "century",
    "meaning": "세기, 백 년"
  },
  {
    "word": "certain",
    "meaning": "확실한, 어떤"
  },
  {
    "word": "chain",
    "meaning": "사슬, 체인"
  },
  {
    "word": "challenge",
    "meaning": "도전, 도전하다"
  },
  {
    "word": "chance",
    "meaning": "기회, 가능성"
  },
  {
    "word": "change",
    "meaning": "변화, 바꾸다"
  },
  {
    "word": "character",
    "meaning": "성격, 등장인물"
  },
  {
    "word": "characteristic",
    "meaning": "특징, 특유의"
  },
  {
    "word": "charge",
    "meaning": "청구하다, 요금, 책임"
  },
  {
    "word": "charity",
    "meaning": "자선, 자선단체"
  },
  {
    "word": "chase",
    "meaning": "뒤쫓다, 추격하다"
  },
  {
    "word": "chat",
    "meaning": "잡담하다"
  },
  {
    "word": "cheap",
    "meaning": "값싼"
  },
  {
    "word": "cheat",
    "meaning": "속이다, 부정행위를 하다"
  },
  {
    "word": "check",
    "meaning": "확인하다, 점검하다"
  },
  {
    "word": "cheer",
    "meaning": "응원하다, 환호"
  },
  {
    "word": "chemical",
    "meaning": "화학의, 화학물질"
  },
  {
    "word": "chief",
    "meaning": "주요한, 우두머리"
  },
  {
    "word": "childhood",
    "meaning": "어린 시절"
  },
  {
    "word": "choice",
    "meaning": "선택"
  },
  {
    "word": "choose",
    "meaning": "선택하다, 고르다"
  },
  {
    "word": "circumstance",
    "meaning": "상황, 환경"
  },
  {
    "word": "cite",
    "meaning": "인용하다"
  },
  {
    "word": "citizen",
    "meaning": "시민"
  },
  {
    "word": "civil",
    "meaning": "시민의, 민간의"
  },
  {
    "word": "civilization",
    "meaning": "문명"
  },
  {
    "word": "claim",
    "meaning": "주장하다, 요구하다"
  },
  {
    "word": "clarify",
    "meaning": "명확하게 하다"
  },
  {
    "word": "classic",
    "meaning": "고전적인, 대표적인"
  },
  {
    "word": "classify",
    "meaning": "분류하다"
  },
  {
    "word": "clue",
    "meaning": "단서, 실마리"
  },
  {
    "word": "collapse",
    "meaning": "붕괴하다, 무너지다"
  },
  {
    "word": "colleague",
    "meaning": "동료"
  },
  {
    "word": "collect",
    "meaning": "수집하다, 모으다"
  },
  {
    "word": "daily",
    "meaning": "매일의, 일상의"
  },
  {
    "word": "damage",
    "meaning": "손상, 피해"
  },
  {
    "word": "danger",
    "meaning": "위험"
  },
  {
    "word": "dangerous",
    "meaning": "위험한"
  },
  {
    "word": "dare",
    "meaning": "감히 ~하다"
  },
  {
    "word": "data",
    "meaning": "자료, 데이터"
  },
  {
    "word": "deadline",
    "meaning": "마감 기한"
  },
  {
    "word": "deal",
    "meaning": "거래하다, 다루다"
  },
  {
    "word": "debate",
    "meaning": "토론, 논쟁"
  },
  {
    "word": "debt",
    "meaning": "빚, 부채"
  },
  {
    "word": "decade",
    "meaning": "10년"
  },
  {
    "word": "decide",
    "meaning": "결정하다"
  },
  {
    "word": "decision",
    "meaning": "결정"
  },
  {
    "word": "declare",
    "meaning": "선언하다, 공표하다"
  },
  {
    "word": "decline",
    "meaning": "감소하다, 거절하다"
  },
  {
    "word": "decrease",
    "meaning": "감소하다, 줄다"
  },
  {
    "word": "dedicate",
    "meaning": "헌신하다, 바치다"
  },
  {
    "word": "deep",
    "meaning": "깊은"
  },
  {
    "word": "defeat",
    "meaning": "패배시키다, 물리치다"
  },
  {
    "word": "defend",
    "meaning": "방어하다, 옹호하다"
  },
  {
    "word": "define",
    "meaning": "정의하다"
  },
  {
    "word": "definite",
    "meaning": "명확한, 확실한"
  },
  {
    "word": "definition",
    "meaning": "정의, 의미"
  },
  {
    "word": "degree",
    "meaning": "정도, 학위"
  },
  {
    "word": "delay",
    "meaning": "지연시키다, 미루다"
  },
  {
    "word": "deliberate",
    "meaning": "의도적인, 신중한"
  },
  {
    "word": "delicate",
    "meaning": "섬세한, 연약한"
  },
  {
    "word": "delight",
    "meaning": "기쁨, 즐거움"
  },
  {
    "word": "deliver",
    "meaning": "배달하다, 전달하다"
  },
  {
    "word": "demand",
    "meaning": "요구하다, 수요"
  },
  {
    "word": "democracy",
    "meaning": "민주주의"
  },
  {
    "word": "demonstrate",
    "meaning": "증명하다, 보여주다"
  },
  {
    "word": "dense",
    "meaning": "밀집한, 짙은"
  },
  {
    "word": "deny",
    "meaning": "부인하다, 거부하다"
  },
  {
    "word": "depend",
    "meaning": "의존하다, 달려있다"
  },
  {
    "word": "depress",
    "meaning": "우울하게 하다"
  },
  {
    "word": "depth",
    "meaning": "깊이"
  },
  {
    "word": "derive",
    "meaning": "유래하다, 끌어내다"
  },
  {
    "word": "describe",
    "meaning": "묘사하다, 설명하다"
  },
  {
    "word": "description",
    "meaning": "묘사, 설명"
  },
  {
    "word": "desert",
    "meaning": "사막, 버리다"
  },
  {
    "word": "deserve",
    "meaning": "~할 자격이 있다, 받을 만하다"
  },
  {
    "word": "design",
    "meaning": "디자인하다, 설계하다"
  },
  {
    "word": "desire",
    "meaning": "욕구, 바라다"
  },
  {
    "word": "despite",
    "meaning": "~에도 불구하고"
  },
  {
    "word": "destination",
    "meaning": "목적지"
  },
  {
    "word": "destroy",
    "meaning": "파괴하다"
  },
  {
    "word": "detail",
    "meaning": "세부사항"
  },
  {
    "word": "detect",
    "meaning": "발견하다, 탐지하다"
  },
  {
    "word": "determine",
    "meaning": "결정하다, 알아내다"
  },
  {
    "word": "eager",
    "meaning": "열망하는"
  },
  {
    "word": "early",
    "meaning": "이른, 일찍"
  },
  {
    "word": "earn",
    "meaning": "벌다"
  },
  {
    "word": "earth",
    "meaning": "지구"
  },
  {
    "word": "ease",
    "meaning": "편안함, 완화하다"
  },
  {
    "word": "east",
    "meaning": "동쪽"
  },
  {
    "word": "easy",
    "meaning": "쉬운"
  },
  {
    "word": "economic",
    "meaning": "경제의"
  },
  {
    "word": "economy",
    "meaning": "경제"
  },
  {
    "word": "edge",
    "meaning": "가장자리"
  },
  {
    "word": "educate",
    "meaning": "교육하다"
  },
  {
    "word": "education",
    "meaning": "교육"
  },
  {
    "word": "effect",
    "meaning": "효과, 영향"
  },
  {
    "word": "effective",
    "meaning": "효과적인"
  },
  {
    "word": "efficient",
    "meaning": "효율적인"
  },
  {
    "word": "effort",
    "meaning": "노력"
  },
  {
    "word": "either",
    "meaning": "둘 중 어느 한쪽"
  },
  {
    "word": "elderly",
    "meaning": "연세가 드신"
  },
  {
    "word": "elect",
    "meaning": "선출하다"
  },
  {
    "word": "election",
    "meaning": "선거"
  },
  {
    "word": "electric",
    "meaning": "전기의"
  },
  {
    "word": "electricity",
    "meaning": "전기"
  },
  {
    "word": "element",
    "meaning": "요소"
  },
  {
    "word": "elementary",
    "meaning": "초보의, 초등의"
  },
  {
    "word": "eliminate",
    "meaning": "제거하다"
  },
  {
    "word": "embarrass",
    "meaning": "당황하게 하다"
  },
  {
    "word": "emerge",
    "meaning": "나타나다"
  },
  {
    "word": "emergency",
    "meaning": "비상사태"
  },
  {
    "word": "face",
    "meaning": "얼굴, 직면하다"
  },
  {
    "word": "fact",
    "meaning": "사실"
  },
  {
    "word": "factor",
    "meaning": "요인"
  },
  {
    "word": "factory",
    "meaning": "공장"
  },
  {
    "word": "fail",
    "meaning": "실패하다"
  },
  {
    "word": "failure",
    "meaning": "실패"
  },
  {
    "word": "fair",
    "meaning": "공정한"
  },
  {
    "word": "faith",
    "meaning": "믿음, 신앙"
  },
  {
    "word": "fall",
    "meaning": "떨어지다, 가을"
  },
  {
    "word": "familiar",
    "meaning": "익숙한"
  },
  {
    "word": "family",
    "meaning": "가족"
  },
  {
    "word": "famous",
    "meaning": "유명한"
  },
  {
    "word": "fantastic",
    "meaning": "환상적인"
  },
  {
    "word": "far",
    "meaning": "먼, 멀리"
  },
  {
    "word": "farm",
    "meaning": "농장"
  },
  {
    "word": "farmer",
    "meaning": "농부"
  },
  {
    "word": "fashion",
    "meaning": "유행, 패션"
  },
  {
    "word": "fast",
    "meaning": "빠른"
  },
  {
    "word": "fasten",
    "meaning": "고정시키다"
  },
  {
    "word": "fat",
    "meaning": "뚱뚱한, 지방"
  },
  {
    "word": "fate",
    "meaning": "운명"
  },
  {
    "word": "fault",
    "meaning": "잘못, 결함"
  },
  {
    "word": "favor",
    "meaning": "호의"
  },
  {
    "word": "favorite",
    "meaning": "가장 좋아하는"
  },
  {
    "word": "fear",
    "meaning": "두려움"
  },
  {
    "word": "feature",
    "meaning": "특징"
  },
  {
    "word": "gain",
    "meaning": "얻다"
  },
  {
    "word": "garage",
    "meaning": "차고"
  },
  {
    "word": "garbage",
    "meaning": "쓰레기"
  },
  {
    "word": "garden",
    "meaning": "정원"
  },
  {
    "word": "gather",
    "meaning": "모으다"
  },
  {
    "word": "gender",
    "meaning": "성별"
  },
  {
    "word": "gene",
    "meaning": "유전자"
  },
  {
    "word": "general",
    "meaning": "일반적인"
  },
  {
    "word": "generally",
    "meaning": "일반적으로"
  },
  {
    "word": "generate",
    "meaning": "발생시키다"
  },
  {
    "word": "generation",
    "meaning": "세대"
  },
  {
    "word": "generous",
    "meaning": "관대한"
  },
  {
    "word": "gentle",
    "meaning": "온화한"
  },
  {
    "word": "gentleman",
    "meaning": "신사"
  },
  {
    "word": "genuine",
    "meaning": "진짜의"
  },
  {
    "word": "geography",
    "meaning": "지리학"
  },
  {
    "word": "gesture",
    "meaning": "몸짓"
  },
  {
    "word": "get",
    "meaning": "얻다"
  },
  {
    "word": "ghost",
    "meaning": "유령"
  },
  {
    "word": "giant",
    "meaning": "거대한"
  },
  {
    "word": "gift",
    "meaning": "선물"
  },
  {
    "word": "girl",
    "meaning": "소녀"
  },
  {
    "word": "give",
    "meaning": "주다"
  },
  {
    "word": "glad",
    "meaning": "기쁜"
  },
  {
    "word": "habit",
    "meaning": "습관"
  },
  {
    "word": "habitat",
    "meaning": "서식지"
  },
  {
    "word": "hair",
    "meaning": "머리카락"
  },
  {
    "word": "half",
    "meaning": "절반"
  },
  {
    "word": "hall",
    "meaning": "홀, 복도"
  },
  {
    "word": "hand",
    "meaning": "손"
  },
  {
    "word": "handle",
    "meaning": "다루다, 손잡이"
  },
  {
    "word": "handsome",
    "meaning": "잘생긴"
  },
  {
    "word": "hang",
    "meaning": "걸다"
  },
  {
    "word": "happen",
    "meaning": "일어나다"
  },
  {
    "word": "happy",
    "meaning": "행복한"
  },
  {
    "word": "harbor",
    "meaning": "항구"
  },
  {
    "word": "hard",
    "meaning": "어려운, 열심히"
  },
  {
    "word": "hardly",
    "meaning": "거의 ~않다"
  },
  {
    "word": "harm",
    "meaning": "해, 해치다"
  },
  {
    "word": "harmony",
    "meaning": "조화"
  },
  {
    "word": "harsh",
    "meaning": "가혹한"
  },
  {
    "word": "harvest",
    "meaning": "수확"
  },
  {
    "word": "hate",
    "meaning": "싫어하다"
  },
  {
    "word": "hatred",
    "meaning": "증오"
  },
  {
    "word": "haunt",
    "meaning": "(귀신이) 나타나다, 괴롭히다"
  },
  {
    "word": "head",
    "meaning": "머리"
  },
  {
    "word": "headache",
    "meaning": "두통"
  },
  {
    "word": "ice",
    "meaning": "얼음"
  },
  {
    "word": "idea",
    "meaning": "생각"
  },
  {
    "word": "ideal",
    "meaning": "이상적인"
  },
  {
    "word": "identify",
    "meaning": "확인하다, 식별하다"
  },
  {
    "word": "identity",
    "meaning": "정체성"
  },
  {
    "word": "idle",
    "meaning": "게으른, 한가한"
  },
  {
    "word": "ignore",
    "meaning": "무시하다"
  },
  {
    "word": "ill",
    "meaning": "아픈"
  },
  {
    "word": "illegal",
    "meaning": "불법의"
  },
  {
    "word": "illness",
    "meaning": "병"
  },
  {
    "word": "illustrate",
    "meaning": "설명하다, 삽화를 그리다"
  },
  {
    "word": "image",
    "meaning": "이미지"
  },
  {
    "word": "imagine",
    "meaning": "상상하다"
  },
  {
    "word": "imitate",
    "meaning": "모방하다"
  },
  {
    "word": "immediate",
    "meaning": "즉각적인"
  },
  {
    "word": "immediately",
    "meaning": "즉시"
  },
  {
    "word": "immigrant",
    "meaning": "이민자"
  },
  {
    "word": "impact",
    "meaning": "영향"
  },
  {
    "word": "imply",
    "meaning": "암시하다"
  },
  {
    "word": "import",
    "meaning": "수입하다"
  },
  {
    "word": "importance",
    "meaning": "중요성"
  },
  {
    "word": "important",
    "meaning": "중요한"
  },
  {
    "word": "impossible",
    "meaning": "불가능한"
  },
  {
    "word": "impress",
    "meaning": "감명을 주다"
  },
  {
    "word": "impression",
    "meaning": "인상"
  },
  {
    "word": "improve",
    "meaning": "향상시키다"
  },
  {
    "word": "improvement",
    "meaning": "향상, 개선"
  },
  {
    "word": "jacket",
    "meaning": "재킷"
  },
  {
    "word": "jail",
    "meaning": "감옥"
  },
  {
    "word": "jam",
    "meaning": "잼, 혼잡"
  },
  {
    "word": "jealous",
    "meaning": "질투하는"
  },
  {
    "word": "jeans",
    "meaning": "청바지"
  },
  {
    "word": "jewel",
    "meaning": "보석"
  },
  {
    "word": "job",
    "meaning": "직업"
  },
  {
    "word": "join",
    "meaning": "가입하다, 참여하다"
  },
  {
    "word": "joint",
    "meaning": "공동의, 관절"
  },
  {
    "word": "joke",
    "meaning": "농담"
  },
  {
    "word": "journal",
    "meaning": "일지, 잡지"
  },
  {
    "word": "journalist",
    "meaning": "기자"
  },
  {
    "word": "journey",
    "meaning": "여행"
  },
  {
    "word": "joy",
    "meaning": "기쁨"
  },
  {
    "word": "judge",
    "meaning": "판사, 판단하다"
  },
  {
    "word": "judgment",
    "meaning": "판단"
  },
  {
    "word": "juice",
    "meaning": "주스"
  },
  {
    "word": "jump",
    "meaning": "뛰다"
  },
  {
    "word": "junior",
    "meaning": "손아래의, 하급의"
  },
  {
    "word": "just",
    "meaning": "방금, 단지"
  },
  {
    "word": "keen",
    "meaning": "예리한, 열심인"
  },
  {
    "word": "keep",
    "meaning": "유지하다"
  },
  {
    "word": "key",
    "meaning": "열쇠"
  },
  {
    "word": "kick",
    "meaning": "차다"
  },
  {
    "word": "kid",
    "meaning": "아이"
  },
  {
    "word": "kill",
    "meaning": "죽이다"
  },
  {
    "word": "kind",
    "meaning": "친절한, 종류"
  },
  {
    "word": "kindergarten",
    "meaning": "유치원"
  },
  {
    "word": "kindness",
    "meaning": "친절"
  },
  {
    "word": "king",
    "meaning": "왕"
  },
  {
    "word": "kingdom",
    "meaning": "왕국"
  },
  {
    "word": "kiss",
    "meaning": "입맞춤, 키스하다"
  },
  {
    "word": "kitchen",
    "meaning": "부엌"
  },
  {
    "word": "knee",
    "meaning": "무릎"
  },
  {
    "word": "kneel",
    "meaning": "무릎을 꿇다"
  },
  {
    "word": "knife",
    "meaning": "칼"
  },
  {
    "word": "knock",
    "meaning": "두드리다"
  },
  {
    "word": "knot",
    "meaning": "매듭"
  },
  {
    "word": "know",
    "meaning": "알다"
  },
  {
    "word": "knowledge",
    "meaning": "지식"
  },
  {
    "word": "label",
    "meaning": "상표, 라벨을 붙이다"
  },
  {
    "word": "labor",
    "meaning": "노동"
  },
  {
    "word": "laboratory",
    "meaning": "실험실"
  },
  {
    "word": "lack",
    "meaning": "부족"
  },
  {
    "word": "ladder",
    "meaning": "사다리"
  },
  {
    "word": "lady",
    "meaning": "숙녀"
  },
  {
    "word": "lake",
    "meaning": "호수"
  },
  {
    "word": "land",
    "meaning": "땅, 착륙하다"
  },
  {
    "word": "landscape",
    "meaning": "풍경"
  },
  {
    "word": "language",
    "meaning": "언어"
  },
  {
    "word": "large",
    "meaning": "큰"
  },
  {
    "word": "last",
    "meaning": "마지막의, 지속되다"
  },
  {
    "word": "late",
    "meaning": "늦은"
  },
  {
    "word": "laugh",
    "meaning": "웃다"
  },
  {
    "word": "launch",
    "meaning": "시작하다, 출시하다"
  },
  {
    "word": "law",
    "meaning": "법"
  },
  {
    "word": "lawyer",
    "meaning": "변호사"
  },
  {
    "word": "lay",
    "meaning": "놓다, 눕히다"
  },
  {
    "word": "layer",
    "meaning": "층"
  },
  {
    "word": "lazy",
    "meaning": "게으른"
  },
  {
    "word": "lead",
    "meaning": "이끌다"
  },
  {
    "word": "leader",
    "meaning": "지도자"
  },
  {
    "word": "leadership",
    "meaning": "리더십"
  },
  {
    "word": "leaf",
    "meaning": "나뭇잎"
  },
  {
    "word": "league",
    "meaning": "리그, 연맹"
  },
  {
    "word": "lean",
    "meaning": "기대다, 마른"
  },
  {
    "word": "leap",
    "meaning": "뛰다, 도약"
  },
  {
    "word": "learn",
    "meaning": "배우다"
  },
  {
    "word": "least",
    "meaning": "최소의"
  },
  {
    "word": "leather",
    "meaning": "가죽"
  },
  {
    "word": "leave",
    "meaning": "떠나다"
  },
  {
    "word": "lecture",
    "meaning": "강의"
  },
  {
    "word": "machine",
    "meaning": "기계"
  },
  {
    "word": "magic",
    "meaning": "마법"
  },
  {
    "word": "majority",
    "meaning": "대다수"
  },
  {
    "word": "mammal",
    "meaning": "포유동물"
  },
  {
    "word": "manner",
    "meaning": "방식"
  },
  {
    "word": "march",
    "meaning": "행진하다"
  },
  {
    "word": "marriage",
    "meaning": "결혼"
  },
  {
    "word": "mass",
    "meaning": "덩어리"
  },
  {
    "word": "math",
    "meaning": "수학"
  },
  {
    "word": "may",
    "meaning": "해도 된다"
  },
  {
    "word": "meal",
    "meaning": "식사"
  },
  {
    "word": "meanwhile",
    "meaning": "그동안에"
  },
  {
    "word": "medicine",
    "meaning": "약"
  },
  {
    "word": "meeting",
    "meaning": "회의"
  },
  {
    "word": "memory",
    "meaning": "기억"
  },
  {
    "word": "merchant",
    "meaning": "상인"
  },
  {
    "word": "merely",
    "meaning": "단지"
  },
  {
    "word": "message",
    "meaning": "메시지"
  },
  {
    "word": "might",
    "meaning": "힘"
  },
  {
    "word": "military",
    "meaning": "군사의"
  },
  {
    "word": "mind",
    "meaning": "마음"
  },
  {
    "word": "minister",
    "meaning": "장관"
  },
  {
    "word": "minute",
    "meaning": "분"
  },
  {
    "word": "miserable",
    "meaning": "비참한"
  },
  {
    "word": "mix",
    "meaning": "섞다"
  },
  {
    "word": "mode",
    "meaning": "방식"
  },
  {
    "word": "modest",
    "meaning": "겸손한"
  },
  {
    "word": "month",
    "meaning": "달"
  },
  {
    "word": "moral",
    "meaning": "도덕적인"
  },
  {
    "word": "morning",
    "meaning": "아침"
  },
  {
    "word": "motion",
    "meaning": "움직임"
  },
  {
    "word": "mountain",
    "meaning": "산"
  },
  {
    "word": "move",
    "meaning": "움직이다"
  },
  {
    "word": "much",
    "meaning": "많은"
  },
  {
    "word": "museum",
    "meaning": "박물관"
  },
  {
    "word": "mutual",
    "meaning": "상호의"
  },
  {
    "word": "naked",
    "meaning": "벌거벗은"
  },
  {
    "word": "national",
    "meaning": "국가의"
  },
  {
    "word": "nature",
    "meaning": "자연"
  },
  {
    "word": "nearly",
    "meaning": "거의"
  },
  {
    "word": "need",
    "meaning": "필요하다"
  },
  {
    "word": "neglect",
    "meaning": "방치하다"
  },
  {
    "word": "nerve",
    "meaning": "신경"
  },
  {
    "word": "network",
    "meaning": "네트워크"
  },
  {
    "word": "nevertheless",
    "meaning": "그럼에도 불구하고"
  },
  {
    "word": "newspaper",
    "meaning": "신문"
  },
  {
    "word": "night",
    "meaning": "밤"
  },
  {
    "word": "nod",
    "meaning": "고개를 끄덕이다"
  },
  {
    "word": "none",
    "meaning": "아무것도 ~않다"
  },
  {
    "word": "north",
    "meaning": "북쪽"
  },
  {
    "word": "nothing",
    "meaning": "아무것도 ~않다"
  },
  {
    "word": "novel",
    "meaning": "소설"
  },
  {
    "word": "nuclear",
    "meaning": "핵의"
  },
  {
    "word": "nut",
    "meaning": "견과"
  },
  {
    "word": "object",
    "meaning": "물체"
  },
  {
    "word": "obligation",
    "meaning": "의무"
  },
  {
    "word": "obtain",
    "meaning": "얻다"
  },
  {
    "word": "occasion",
    "meaning": "경우"
  },
  {
    "word": "occupy",
    "meaning": "차지하다"
  },
  {
    "word": "off",
    "meaning": "떨어져"
  },
  {
    "word": "offer",
    "meaning": "제안하다"
  },
  {
    "word": "official",
    "meaning": "공식적인"
  },
  {
    "word": "old",
    "meaning": "오래된"
  },
  {
    "word": "ongoing",
    "meaning": "진행 중인"
  },
  {
    "word": "onto",
    "meaning": "~위로"
  },
  {
    "word": "operation",
    "meaning": "작동"
  },
  {
    "word": "oppose",
    "meaning": "반대하다"
  },
  {
    "word": "oral",
    "meaning": "구두의"
  },
  {
    "word": "order",
    "meaning": "명령하다"
  },
  {
    "word": "organization",
    "meaning": "조직"
  },
  {
    "word": "original",
    "meaning": "원래의"
  },
  {
    "word": "otherwise",
    "meaning": "그렇지 않으면"
  },
  {
    "word": "outdoor",
    "meaning": "야외의"
  },
  {
    "word": "outside",
    "meaning": "밖에"
  },
  {
    "word": "over",
    "meaning": "~위에"
  },
  {
    "word": "overseas",
    "meaning": "해외의"
  },
  {
    "word": "own",
    "meaning": "소유하다"
  },
  {
    "word": "pace",
    "meaning": "속도"
  },
  {
    "word": "pain",
    "meaning": "고통"
  },
  {
    "word": "painting",
    "meaning": "그림"
  },
  {
    "word": "pale",
    "meaning": "창백한"
  },
  {
    "word": "paper",
    "meaning": "종이"
  },
  {
    "word": "park",
    "meaning": "공원"
  },
  {
    "word": "particular",
    "meaning": "특정한"
  },
  {
    "word": "partner",
    "meaning": "동반자"
  },
  {
    "word": "passenger",
    "meaning": "승객"
  },
  {
    "word": "past",
    "meaning": "과거"
  },
  {
    "word": "patient",
    "meaning": "환자"
  },
  {
    "word": "payment",
    "meaning": "지불"
  },
  {
    "word": "peak",
    "meaning": "정상"
  },
  {
    "word": "penalty",
    "meaning": "벌칙"
  },
  {
    "word": "percent",
    "meaning": "퍼센트"
  },
  {
    "word": "performance",
    "meaning": "공연"
  },
  {
    "word": "permanent",
    "meaning": "영구적인"
  },
  {
    "word": "person",
    "meaning": "사람"
  },
  {
    "word": "perspective",
    "meaning": "관점"
  },
  {
    "word": "phenomenon",
    "meaning": "현상"
  },
  {
    "word": "phrase",
    "meaning": "구절"
  },
  {
    "word": "physics",
    "meaning": "물리학"
  },
  {
    "word": "piece",
    "meaning": "조각"
  },
  {
    "word": "pin",
    "meaning": "핀"
  },
  {
    "word": "pipe",
    "meaning": "파이프"
  },
  {
    "word": "plain",
    "meaning": "분명한"
  },
  {
    "word": "planet",
    "meaning": "행성"
  },
  {
    "word": "platform",
    "meaning": "플랫폼"
  },
  {
    "word": "pleasant",
    "meaning": "즐거운"
  },
  {
    "word": "plenty",
    "meaning": "충분한 양"
  },
  {
    "word": "poem",
    "meaning": "시"
  },
  {
    "word": "poison",
    "meaning": "독"
  },
  {
    "word": "policy",
    "meaning": "정책"
  },
  {
    "word": "politics",
    "meaning": "정치"
  },
  {
    "word": "pollution",
    "meaning": "오염"
  },
  {
    "word": "poor",
    "meaning": "가난한"
  },
  {
    "word": "portion",
    "meaning": "부분"
  },
  {
    "word": "position",
    "meaning": "위치"
  },
  {
    "word": "possession",
    "meaning": "소유"
  },
  {
    "word": "post",
    "meaning": "게시하다"
  },
  {
    "word": "potential",
    "meaning": "잠재적인"
  },
  {
    "word": "powder",
    "meaning": "가루"
  },
  {
    "word": "practical",
    "meaning": "실용적인"
  },
  {
    "word": "precious",
    "meaning": "귀중한"
  },
  {
    "word": "prefer",
    "meaning": "선호하다"
  },
  {
    "word": "prepare",
    "meaning": "준비하다"
  },
  {
    "word": "president",
    "meaning": "대통령"
  },
  {
    "word": "pretend",
    "meaning": "~인 척하다"
  },
  {
    "word": "previous",
    "meaning": "이전의"
  },
  {
    "word": "pride",
    "meaning": "자부심"
  },
  {
    "word": "prime",
    "meaning": "최고의"
  },
  {
    "word": "principle",
    "meaning": "원칙"
  },
  {
    "word": "prison",
    "meaning": "감옥"
  },
  {
    "word": "private",
    "meaning": "사적인"
  },
  {
    "word": "probably",
    "meaning": "아마"
  },
  {
    "word": "process",
    "meaning": "과정"
  },
  {
    "word": "production",
    "meaning": "생산"
  },
  {
    "word": "professor",
    "meaning": "교수"
  },
  {
    "word": "progress",
    "meaning": "진보"
  },
  {
    "word": "prominent",
    "meaning": "저명한"
  },
  {
    "word": "prompt",
    "meaning": "즉각적인"
  },
  {
    "word": "properly",
    "meaning": "적절히"
  },
  {
    "word": "propose",
    "meaning": "제안하다"
  },
  {
    "word": "protection",
    "meaning": "보호"
  },
  {
    "word": "proud",
    "meaning": "자랑스러운"
  },
  {
    "word": "province",
    "meaning": "지방"
  },
  {
    "word": "public",
    "meaning": "대중의"
  },
  {
    "word": "pulse",
    "meaning": "맥박"
  },
  {
    "word": "purchase",
    "meaning": "구매하다"
  },
  {
    "word": "purpose",
    "meaning": "목적"
  },
  {
    "word": "put",
    "meaning": "놓다"
  },
  {
    "word": "quarrel",
    "meaning": "다투다"
  },
  {
    "word": "question",
    "meaning": "질문"
  },
  {
    "word": "quiet",
    "meaning": "조용한"
  },
  {
    "word": "race",
    "meaning": "경주"
  },
  {
    "word": "rail",
    "meaning": "철도"
  },
  {
    "word": "range",
    "meaning": "범위"
  },
  {
    "word": "rarely",
    "meaning": "거의 ~않다"
  },
  {
    "word": "ratio",
    "meaning": "비율"
  },
  {
    "word": "react",
    "meaning": "반응하다"
  },
  {
    "word": "ready",
    "meaning": "준비된"
  },
  {
    "word": "realize",
    "meaning": "깨닫다"
  },
  {
    "word": "reason",
    "meaning": "이유"
  },
  {
    "word": "receive",
    "meaning": "받다"
  },
  {
    "word": "recognize",
    "meaning": "알아보다"
  },
  {
    "word": "recover",
    "meaning": "회복하다"
  },
  {
    "word": "red",
    "meaning": "빨간색"
  },
  {
    "word": "reference",
    "meaning": "참고"
  },
  {
    "word": "refrigerator",
    "meaning": "냉장고"
  },
  {
    "word": "region",
    "meaning": "지역"
  },
  {
    "word": "regular",
    "meaning": "규칙적인"
  },
  {
    "word": "regulation",
    "meaning": "규정"
  },
  {
    "word": "relation",
    "meaning": "관계"
  },
  {
    "word": "relax",
    "meaning": "휴식을 취하다"
  },
  {
    "word": "reliable",
    "meaning": "믿을 만한"
  },
  {
    "word": "religion",
    "meaning": "종교"
  },
  {
    "word": "remain",
    "meaning": "남다"
  },
  {
    "word": "remember",
    "meaning": "기억하다"
  },
  {
    "word": "remove",
    "meaning": "제거하다"
  },
  {
    "word": "repair",
    "meaning": "수리하다"
  },
  {
    "word": "report",
    "meaning": "보고하다"
  },
  {
    "word": "reputation",
    "meaning": "평판"
  },
  {
    "word": "requirement",
    "meaning": "요구 사항"
  },
  {
    "word": "reserve",
    "meaning": "예약하다"
  },
  {
    "word": "resistance",
    "meaning": "저항"
  },
  {
    "word": "respect",
    "meaning": "존중하다"
  },
  {
    "word": "responsibility",
    "meaning": "책임"
  },
  {
    "word": "restaurant",
    "meaning": "식당"
  },
  {
    "word": "restriction",
    "meaning": "제한"
  },
  {
    "word": "reveal",
    "meaning": "드러내다"
  },
  {
    "word": "review",
    "meaning": "검토하다"
  },
  {
    "word": "rhythm",
    "meaning": "리듬"
  },
  {
    "word": "ride",
    "meaning": "타다"
  },
  {
    "word": "rigid",
    "meaning": "엄격한"
  },
  {
    "word": "risk",
    "meaning": "위험"
  },
  {
    "word": "road",
    "meaning": "도로"
  },
  {
    "word": "rock",
    "meaning": "바위"
  },
  {
    "word": "romantic",
    "meaning": "낭만적인"
  },
  {
    "word": "root",
    "meaning": "뿌리"
  },
  {
    "word": "round",
    "meaning": "둥근"
  },
  {
    "word": "row",
    "meaning": "줄"
  },
  {
    "word": "rude",
    "meaning": "무례한"
  },
  {
    "word": "run",
    "meaning": "달리다"
  },
  {
    "word": "sad",
    "meaning": "슬픈"
  },
  {
    "word": "safe",
    "meaning": "안전한"
  },
  {
    "word": "safety",
    "meaning": "안전"
  },
  {
    "word": "sail",
    "meaning": "항해하다"
  },
  {
    "word": "salad",
    "meaning": "샐러드"
  },
  {
    "word": "salary",
    "meaning": "월급"
  },
  {
    "word": "sale",
    "meaning": "판매"
  },
  {
    "word": "salt",
    "meaning": "소금"
  },
  {
    "word": "same",
    "meaning": "같은"
  },
  {
    "word": "sample",
    "meaning": "견본"
  },
  {
    "word": "sand",
    "meaning": "모래"
  },
  {
    "word": "satisfy",
    "meaning": "만족시키다"
  },
  {
    "word": "save",
    "meaning": "구하다"
  },
  {
    "word": "say",
    "meaning": "말하다"
  },
  {
    "word": "scare",
    "meaning": "겁주다"
  },
  {
    "word": "scared",
    "meaning": "무서워하는"
  },
  {
    "word": "scene",
    "meaning": "장면"
  },
  {
    "word": "schedule",
    "meaning": "일정"
  },
  {
    "word": "science",
    "meaning": "과학"
  },
  {
    "word": "scientist",
    "meaning": "과학자"
  },
  {
    "word": "score",
    "meaning": "점수"
  },
  {
    "word": "scream",
    "meaning": "비명을 지르다"
  },
  {
    "word": "screen",
    "meaning": "화면"
  },
  {
    "word": "sea",
    "meaning": "바다"
  },
  {
    "word": "search",
    "meaning": "찾다"
  },
  {
    "word": "season",
    "meaning": "계절"
  },
  {
    "word": "seat",
    "meaning": "좌석"
  },
  {
    "word": "second",
    "meaning": "두 번째의"
  },
  {
    "word": "secret",
    "meaning": "비밀"
  },
  {
    "word": "section",
    "meaning": "부분"
  },
  {
    "word": "secure",
    "meaning": "안전한"
  },
  {
    "word": "see",
    "meaning": "보다"
  },
  {
    "word": "seed",
    "meaning": "씨앗"
  },
  {
    "word": "seek",
    "meaning": "찾다"
  },
  {
    "word": "seem",
    "meaning": "~처럼 보이다"
  },
  {
    "word": "select",
    "meaning": "선택하다"
  },
  {
    "word": "sell",
    "meaning": "팔다"
  },
  {
    "word": "send",
    "meaning": "보내다"
  },
  {
    "word": "senior",
    "meaning": "손위의"
  },
  {
    "word": "sense",
    "meaning": "감각"
  },
  {
    "word": "sentence",
    "meaning": "문장"
  },
  {
    "word": "separate",
    "meaning": "분리하다"
  },
  {
    "word": "series",
    "meaning": "연속"
  },
  {
    "word": "serious",
    "meaning": "심각한"
  },
  {
    "word": "serve",
    "meaning": "봉사하다"
  },
  {
    "word": "service",
    "meaning": "서비스"
  },
  {
    "word": "set",
    "meaning": "놓다"
  },
  {
    "word": "settle",
    "meaning": "정착하다"
  },
  {
    "word": "several",
    "meaning": "몇몇의"
  },
  {
    "word": "severe",
    "meaning": "심한"
  },
  {
    "word": "shadow",
    "meaning": "그림자"
  },
  {
    "word": "shake",
    "meaning": "흔들다"
  },
  {
    "word": "shall",
    "meaning": "~할 것이다"
  },
  {
    "word": "shame",
    "meaning": "수치심"
  },
  {
    "word": "shape",
    "meaning": "모양"
  },
  {
    "word": "share",
    "meaning": "공유하다"
  },
  {
    "word": "sharp",
    "meaning": "날카로운"
  },
  {
    "word": "she",
    "meaning": "그녀"
  },
  {
    "word": "sheep",
    "meaning": "양"
  },
  {
    "word": "sheet",
    "meaning": "종이 한 장"
  },
  {
    "word": "shelf",
    "meaning": "선반"
  },
  {
    "word": "shell",
    "meaning": "껍질"
  },
  {
    "word": "shelter",
    "meaning": "피난처"
  },
  {
    "word": "shine",
    "meaning": "빛나다"
  },
  {
    "word": "ship",
    "meaning": "배"
  },
  {
    "word": "shirt",
    "meaning": "셔츠"
  },
  {
    "word": "shock",
    "meaning": "충격"
  },
  {
    "word": "shoe",
    "meaning": "신발"
  },
  {
    "word": "shoot",
    "meaning": "쏘다"
  },
  {
    "word": "shop",
    "meaning": "가게"
  },
  {
    "word": "shore",
    "meaning": "해안"
  },
  {
    "word": "table",
    "meaning": "탁자"
  },
  {
    "word": "tail",
    "meaning": "꼬리"
  },
  {
    "word": "take",
    "meaning": "잡다"
  },
  {
    "word": "tale",
    "meaning": "이야기"
  },
  {
    "word": "talent",
    "meaning": "재능"
  },
  {
    "word": "talk",
    "meaning": "말하다"
  },
  {
    "word": "tall",
    "meaning": "키가 큰"
  },
  {
    "word": "tank",
    "meaning": "탱크"
  },
  {
    "word": "target",
    "meaning": "목표"
  },
  {
    "word": "task",
    "meaning": "과제"
  },
  {
    "word": "taste",
    "meaning": "맛"
  },
  {
    "word": "tax",
    "meaning": "세금"
  },
  {
    "word": "taxi",
    "meaning": "택시"
  },
  {
    "word": "tea",
    "meaning": "차"
  },
  {
    "word": "teach",
    "meaning": "가르치다"
  },
  {
    "word": "teacher",
    "meaning": "선생님"
  },
  {
    "word": "team",
    "meaning": "팀"
  },
  {
    "word": "tear",
    "meaning": "눈물"
  },
  {
    "word": "technology",
    "meaning": "기술"
  },
  {
    "word": "teenager",
    "meaning": "십대"
  },
  {
    "word": "telephone",
    "meaning": "전화기"
  },
  {
    "word": "television",
    "meaning": "텔레비전"
  },
  {
    "word": "tell",
    "meaning": "말하다"
  },
  {
    "word": "temperature",
    "meaning": "온도"
  },
  {
    "word": "temple",
    "meaning": "사원"
  },
  {
    "word": "tend",
    "meaning": "경향이 있다"
  },
  {
    "word": "tent",
    "meaning": "텐트"
  },
  {
    "word": "term",
    "meaning": "용어"
  },
  {
    "word": "terrible",
    "meaning": "끔찍한"
  },
  {
    "word": "test",
    "meaning": "시험"
  },
  {
    "word": "text",
    "meaning": "글"
  },
  {
    "word": "thank",
    "meaning": "감사하다"
  },
  {
    "word": "theater",
    "meaning": "극장"
  },
  {
    "word": "theory",
    "meaning": "이론"
  },
  {
    "word": "there",
    "meaning": "거기에"
  },
  {
    "word": "thick",
    "meaning": "두꺼운"
  },
  {
    "word": "thief",
    "meaning": "도둑"
  },
  {
    "word": "thin",
    "meaning": "얇은"
  },
  {
    "word": "thing",
    "meaning": "것"
  },
  {
    "word": "think",
    "meaning": "생각하다"
  },
  {
    "word": "thirsty",
    "meaning": "목마른"
  },
  {
    "word": "though",
    "meaning": "비록 ~이지만"
  },
  {
    "word": "thought",
    "meaning": "생각"
  },
  {
    "word": "thousand",
    "meaning": "천"
  },
  {
    "word": "thread",
    "meaning": "실"
  },
  {
    "word": "threat",
    "meaning": "위협"
  },
  {
    "word": "throat",
    "meaning": "목구멍"
  },
  {
    "word": "through",
    "meaning": "~을 통해"
  },
  {
    "word": "throw",
    "meaning": "던지다"
  },
  {
    "word": "thumb",
    "meaning": "엄지손가락"
  },
  {
    "word": "ticket",
    "meaning": "표"
  },
  {
    "word": "tie",
    "meaning": "넥타이"
  },
  {
    "word": "tight",
    "meaning": "꽉 조이는"
  },
  {
    "word": "time",
    "meaning": "시간"
  },
  {
    "word": "tiny",
    "meaning": "아주 작은"
  },
  {
    "word": "ugly",
    "meaning": "못생긴"
  },
  {
    "word": "umbrella",
    "meaning": "우산"
  },
  {
    "word": "uncle",
    "meaning": "삼촌"
  },
  {
    "word": "under",
    "meaning": "~아래에"
  },
  {
    "word": "understand",
    "meaning": "이해하다"
  },
  {
    "word": "uniform",
    "meaning": "교복"
  },
  {
    "word": "union",
    "meaning": "연합"
  },
  {
    "word": "unique",
    "meaning": "독특한"
  },
  {
    "word": "unit",
    "meaning": "단위"
  },
  {
    "word": "unite",
    "meaning": "통합하다"
  },
  {
    "word": "universe",
    "meaning": "우주"
  },
  {
    "word": "university",
    "meaning": "대학교"
  },
  {
    "word": "unless",
    "meaning": "~하지 않는다면"
  },
  {
    "word": "until",
    "meaning": "~까지"
  },
  {
    "word": "unusual",
    "meaning": "특이한"
  },
  {
    "word": "vacation",
    "meaning": "방학"
  },
  {
    "word": "valley",
    "meaning": "계곡"
  },
  {
    "word": "valuable",
    "meaning": "귀중한"
  },
  {
    "word": "value",
    "meaning": "가치"
  },
  {
    "word": "van",
    "meaning": "밴"
  },
  {
    "word": "various",
    "meaning": "다양한"
  },
  {
    "word": "vary",
    "meaning": "다르다"
  },
  {
    "word": "vast",
    "meaning": "광대한"
  },
  {
    "word": "vegetable",
    "meaning": "채소"
  },
  {
    "word": "vehicle",
    "meaning": "차량"
  },
  {
    "word": "version",
    "meaning": "버전"
  },
  {
    "word": "very",
    "meaning": "매우"
  },
  {
    "word": "victim",
    "meaning": "희생자"
  },
  {
    "word": "victory",
    "meaning": "승리"
  },
  {
    "word": "video",
    "meaning": "영상"
  },
  {
    "word": "view",
    "meaning": "경치"
  },
  {
    "word": "village",
    "meaning": "마을"
  },
  {
    "word": "violent",
    "meaning": "폭력적인"
  },
  {
    "word": "visit",
    "meaning": "방문하다"
  },
  {
    "word": "voice",
    "meaning": "목소리"
  },
  {
    "word": "wage",
    "meaning": "임금"
  },
  {
    "word": "wait",
    "meaning": "기다리다"
  },
  {
    "word": "wake",
    "meaning": "깨다"
  },
  {
    "word": "walk",
    "meaning": "걷다"
  },
  {
    "word": "wall",
    "meaning": "벽"
  },
  {
    "word": "want",
    "meaning": "원하다"
  },
  {
    "word": "war",
    "meaning": "전쟁"
  },
  {
    "word": "warm",
    "meaning": "따뜻한"
  },
  {
    "word": "warn",
    "meaning": "경고하다"
  },
  {
    "word": "wash",
    "meaning": "씻다"
  },
  {
    "word": "waste",
    "meaning": "낭비하다"
  },
  {
    "word": "watch",
    "meaning": "보다"
  },
  {
    "word": "water",
    "meaning": "물"
  },
  {
    "word": "wave",
    "meaning": "파도"
  },
  {
    "word": "way",
    "meaning": "방법"
  },
  {
    "word": "weak",
    "meaning": "약한"
  },
  {
    "word": "wealth",
    "meaning": "부"
  },
  {
    "word": "weapon",
    "meaning": "무기"
  },
  {
    "word": "wear",
    "meaning": "입다"
  },
  {
    "word": "weather",
    "meaning": "날씨"
  },
  {
    "word": "week",
    "meaning": "주"
  },
  {
    "word": "weigh",
    "meaning": "무게를 재다"
  },
  {
    "word": "weight",
    "meaning": "무게"
  },
  {
    "word": "welcome",
    "meaning": "환영하다"
  },
  {
    "word": "west",
    "meaning": "서쪽"
  },
  {
    "word": "x-ray",
    "meaning": "엑스레이"
  },
  {
    "word": "xylophone",
    "meaning": "실로폰"
  },
  {
    "word": "yard",
    "meaning": "마당"
  },
  {
    "word": "yawn",
    "meaning": "하품하다"
  },
  {
    "word": "year",
    "meaning": "년"
  },
  {
    "word": "yell",
    "meaning": "소리치다"
  },
  {
    "word": "yellow",
    "meaning": "노란색"
  },
  {
    "word": "yesterday",
    "meaning": "어제"
  },
  {
    "word": "young",
    "meaning": "젊은"
  },
  {
    "word": "youth",
    "meaning": "젊음"
  },
  {
    "word": "zebra",
    "meaning": "얼룩말"
  },
  {
    "word": "zero",
    "meaning": "영"
  },
  {
    "word": "zone",
    "meaning": "지역"
  },
  {
    "word": "zoo",
    "meaning": "동물원"
  }
];

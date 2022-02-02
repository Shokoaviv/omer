dragElement(document.getElementById("grid-container"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const leftPosition = elmnt.offsetLeft - pos1;
    const topPosition = elmnt.offsetTop - pos2;

    elmnt.style.top =
      topPosition < 200 &&
      topPosition > -windowHeight - 200 &&
      elmnt.offsetTop - pos2 + "px";
    elmnt.style.left =
      leftPosition > -windowWidth - 200 &&
      leftPosition < 200 &&
      elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//creating grid items

const activeElements = {
  1: {
    column: 3,
    row: 7,
    spanRow: 3,
    spanColumn: 3,
    thumbnail: "",
    modalTitle: "שינה/ אנדי וורהול",
    modalSubTitle: `
    סרט
    5 שעות ו 20 דקות
 `,
    modalBody: `סרט‭ ‬המכיל‭ ‬לופ‭ ‬של‭ ‬המאהב‭ ‬של‭ ‬וורהול‭ ‬ג׳ון‭ ‬גיורנו‭ ‬ישן‭. ‬היה‭ ‬ההתנסות‭ ‬הראשונה‭ ‬של‭ ‬וורהול‭ ‬ביצירת‭ ‬סרט‭ ‬סרט‭ ‬אילם‭ ‬שחור‭ ‬לבן‭ ‬שמראה‭ ‬את‭ ‬גיורנו‭ ‬ישן‭ ‬
    1964
    `,
  },
  2: {
    column: 1,
    row: 2,
    spanRow: 2,
    spanColumn: 2,
    thumbnail: "",
    modalTitle: "הישנים/ סופי קאל",
    modalSubTitle: `
    1979
 `,
    modalBody: `במשך‭ ‬שמונה‭ ‬לילות‭ ‬סופי‭ ‬קאל‭ ‬הזמינה‭ ‬חברים‭ ‬וזרים‭ ‬לבלות‭ ‬כל‭ ‬אחד‭ ‬שמונה‭ ‬שעות‭ ‬במיטה‭ ‬שלה‭, ‬משום‭ ‬שלדעתה‭ ‬המיטה‭ ‬״מתבזבזת״‭ ‬בשעות‭ ‬שבהן‭ ‬היא‭ ‬ריקה‭. ‬ובזמן‭ ‬שהם‭ ‬ישנים‭ ‬היא‭ ‬מצלמת‭ ‬אותם‭ ‬ורושמת‭ ‬עליהם‭ ‬רשימות‭- ‬על‭ ‬מה‭ ‬הם‭ ‬חלמו‭ ‬ומה‭ ‬עשו‭ ‬בזמן‭ ‬שישנו‭. ‬״אנו‭ ‬רואים‭ ‬עיקול‭ ‬של‭ ‬עכוז‭ ‬עירום‭, ‬ברך‭ ‬חיוורת‭ ‬מציצה‭ ‬מתחת‭ ‬לשמיכות״‭ "‬בשעה‭ ‬18:45‭ ‬הוא‭ ‬ישן‭ ‬עמוק‭", ‬היא‭ ‬כותבת‭ ‬על‭ ‬גבר‭ ‬אחד‭. "‬הוא‭ ‬ממשיך‭ ‬לזרוק‭ ‬את‭ ‬השמיכות‭." ‬הצילומים‭ ‬שלה‭  ‬מייצרים‭ ‬אינטימיות‭ ‬קיצונית‭ - ‬עבודתה‭ ‬חושפת‭ ‬כמה‭ ‬מעט‭ ‬אנחנו‭ ‬בעצם‭ ‬יכולים‭ ‬לדעת‭ ‬על‭ ‬אחרים‭, ‬אפילו‭ ‬על‭ ‬אלה‭ ‬שאיתם‭ ‬אנחנו‭ ‬חולקים‭ ‬את‭ ‬המיטה‭ ‬שלנו‭. ‬האנתרופולוגיה‭ ‬של‭ ‬התמקדות‭ ‬במקומי‭ ‬ובבנאלי‭. ‬`,
  },
  3: {
    column: 8,
    row: 1,
    spanRow: 3,
    spanColumn: 3,
    thumbnail: "",
    modalTitle: "לייט נייט טיילס",
    modalBody: `שמה‭ ‬של‭ ‬סדרת‭ ‬אלבומי‭ ‬אוסף‭ ‬אשר‭ ‬נאצרו‭ ‬בידי‭ ‬אמנים‭ ‬של‭ ‬הלייבל‭ ‬נייט‭ ‬טיים‭ ‬סטוריז‭. ‬הרצועות‭ ‬באלבומים‭ ‬נבחרות‭ ‬על‭ ‬ידי‭ ‬אמנים‭ ‬שהתבקשו‭ ‬ליצור‭ ‬את‭ ‬המיקס‭ ‬האולטימטיבי‭ ‬לשעות‭ ‬המאוחרות‭ ‬של‭ ‬הלילה‭. ‬רבים‭ ‬מהאלבומים‭ ‬מסתיימים‭ ‬בקטע‭ ‬קצר‭ ‬של‭ ‬סיפור‭.‬`,
  },
  4: {
    column: 2,
    row: 10,
    spanRow: 4,
    spanColumn: 4,
    gif: true,
    thumbnail: "",
    modalTitle: "שיר ערש",
    modalBody:
      "שיר‭ ‬ערש‭ ‬הוא‭ ‬שיר‭ ‬המושר‭ ‬באוזני‭ ‬ילדים‭ ‬לפני‭ ‬השינה‭, ‬ונועד‭ ‬להרדימם‭. ‬שירי‭ ‬ערש‭ ‬מאופיינים‭ ‬בנימה‭ ‬רגשנית‭ ‬ובמילים‭ ‬החוזרות‭ ‬על‭ ‬עצמן‭ ‬ומבטאות‭ ‬עצב‭ ‬קיומי‭ ‬התפקיד‭ ‬של‭ ‬שירי‭ ‬ערש‭ ‬היה‭ ‬לאו‭ ‬דווקא‭ ‬להרגיע‭ ‬את‭ ‬הילד‭ ‬אלא‭ ‬להרגיע‭ ‬את‭ ‬המרגיע‭- ‬את‭ ‬המבוגר‭. ‬כדי‭ ‬שזה‭ ‬יוכל‭ ‬להרגיע‭ ‬את‭ ‬התינוק‭ ‬הקטן‭ ‬התינוק‭ ‬הקטן‭ ‬לא‭ ‬מבין‭ ‬את‭ ‬המילים‭ ‬המילים‭ ‬הן‭ ‬הרבה‭ ‬פעמים‭ ‬מותאמות‭ ‬למצבים‭ ‬שיכולים‭ ‬לקרות‭ ‬אצל‭ ‬המבוגר‭. ‬ומכיוון‭ ‬שההשכבה‭ ‬באופן‭ ‬מסורתי‭ ‬היתה‭ ‬התפקיד‭ ‬של‭ ‬האמא‭ ‬הרבה‭ ‬מהשירין‭ ‬נכתבו‭ ‬מנקודת‭ ‬המבט‭ ‬שלה‭ ‬ושל‭ ‬המצוקות‭ ‬שלה‭. ‬יש‭ ‬הרבה‭ ‬שירים‭ ‬המבטאים‭ ‬את‭ ‬הפחד‭ ‬של‭ ‬ההורה‭ ‬ממות‭ ‬התינוק‭. ‬ונועדו‭ ‬לייצר‭ ‬מטאפורות‭ ‬שיעזרו‭ ‬לאמא‭ ‬לאוורר‭ ‬את‭ ‬החששות‭ ‬שלהן‭. ‬שירים‭ ‬אחרים‭ ‬מתאפיינים‭ ‬בגישה‭ ‬חינוכית‭- ‬נועדו‭ ‬לאיים‭ ‬על‭ ‬הילדים‭ ‬שאם‭ ‬לא‭ ‬ילכו‭ ‬לישון‭, ‬יקחו‭ ‬אותם",
  },
  5: {
    column: 7,
    row: 6,
    spanRow: 3,
    spanColumn: 3,
    gif: true,
    thumbnail: "",
    modalTitle: "ניקטופוביה",
    modalBody: `‬מיוונית‭: ‬הלחם‭ ‬המילים‭ ‬ניקס‭ - ‬אלת‭ ‬הלילה‭ ‬במיתולוגיה‭ ‬היוונית‭ ‬ופוביה‭) ‬פחד‭ ‬לא‭ ‬רציונלי‭ ‬מהחושך‭ ‬זהו‭ ‬אחד‭ ‬הפחדים‭ ‬הנפוצים‭ ‬ביותר‭, ‬בעיקר‭ ‬בקרב‭ ‬ילדים‭, ‬אך‭ ‬נפוץ‭ ‬במידה‭ ‬מסוימת‭ ‬גם‭ ‬בקרב‭ ‬מבוגרים‭. ‬הסובל‭ ‬מניקטופוביה‭ ‬אינו‭ ‬פוחד‭ ‬ישירות‭ ‬מגורם‭ ‬הפוביה‭- ‬החושך‭, ‬אלא‭ ‬מכך‭ ‬שיצור‭ (‬בעל‭ ‬חיים‭ ‬או‭ ‬מפלצת‭) ‬יתקוף‭ ‬אותם‭ ‬בחשיכה‭. ‬משערים‭ ‬כי‭ ‬הוא‭ ‬שריד‭ ‬מתקופת‭ ‬הפרהיסטוריה‭ ‬בה‭ ‬החושך‭ ‬היווה‭ ‬חיסרון‭ ‬בהתמודדות‭ ‬נגד‭ ‬טורפים‭. ‬פחד‭ ‬זה‭ ‬מתבטא‭ ‬בשני‭ ‬סוגי‭ ‬מצבים‭, ‬בהם‭ ‬תסמיניו‭ ‬שונים‭: ‬להיות‭ ‬לבד‭ ‬במקום‭ ‬חשוך‭- ‬הוא‭ ‬עלול‭ ‬לחוש‭ ‬הרגשת‭ ‬רתיעה‭ ‬גדולה‭, ‬המלווה‭ ‬בהזעה‭, ‬שיתוק‭, ‬ובמקרים‭ ‬קיצוניים‭ ‬גם‭ ‬צעקות‭. ‬כל‭ ‬צליל‭ ‬הנשמע‭ ‬מרחוק‭ ‬מפתיע‭ ‬ומרתיע‭. ‬או‭ ‬כאשר‭ ‬האדם‭ ‬הולך‭ ‬לישון‭ ‬במקום‭ ‬חשוך‭. ‬
    מנורת‭ ‬לילה‭- ‬יכולה‭ ‬להעלים‭ ‬את‭ ‬החושך‭ ‬כשהולכים‭ ‬לישון‭.‬
    שריקה‭- ‬מפוגגת‭ ‬את‭ ‬אשליית‭ ‬השקט‭.‬
    עצימת‭ ‬עיניים‭- ‬משמש‭ ‬להרגעת‭ ‬התחושה‭ ‬של‭ ‬להיות‭ ‬לכוד‭ ‬בחושך‭.‬
    `,
  },
  6: {
    column: 16,
    row: 9,
    spanRow: 2,
    spanColumn: 2,
    gif: true,
    thumbnail: "",
    modalTitle: "שנת צהריים / שלאפטשטונדה / סיאסטה",
    modalBody: `נמנום‭ ‬קצר‭, ‬לרוב‭ ‬לאחר‭ ‬ארוחת‭ ‬צוהריים‭. ‬ישנן‭ ‬תרבויות‭ ‬שבהן‭ ‬שנת‭ ‬הצהריים‭ ‬חלק‭ ‬בלתי‭ ‬נפרד‭ ‬מסדר‭ ‬היום‭ ‬הקבוע‭. ‬בעברית‭ ‬מודרנית‭ ‬נהוג‭ ‬לקצר‭ ‬את‭ ‬הביטוי‭ ‬בגרשיים‭ ‬כך‭ ‬שהוא‭ ‬נקרא‭ ‬בפי‭ ‬רוב‭ '‬שנ‭"‬צ‭'.‬`,
  },
  7: {
    column: 17,
    row: 6,
    spanRow: 2,
    spanColumn: 2,
    gif: true,
    thumbnail: "",
    modalTitle: "סיוט",

    modalBody: `זה‭ ‬כמו‭ ‬חלום‭ ‬אבל‭ ‬רע‭ ‬בעל‭ ‬השפעה‭ ‬גבוהה‭ ‬על‭ ‬רגשותיו‭ ‬על‭ ‬החולם‭, ‬הגורם‭ ‬לו‭ ‬לאימה‭ ‬ובהלה‭ ‬עד‭ ‬כדי‭ ‬התעוררות‭ ‬מהשינה‭.‬`,
  },
  8: {
    column: 12,
    row: 10,
    spanRow: 3,
    spanColumn: 3,
    gif: true,
    thumbnail: "",
    modalTitle: "שנת חלום",
    modalBody: `[ריצודי עיניים מהירים-REM]
    שלב‭ ‬זה‭ ‬הוא‭ ‬השינה‭ ‬העמוקה‭ ‬ביותר‭- ‬בשלב‭ ‬זה‭, ‬הפעילות‭ ‬המטבולית‭ ‬וקצב‭ ‬פעימות‭ ‬הלב‭ ‬עולים‭ ‬בחדות‭, ‬ובולטים‭ ‬ריצודי‭ ‬העין‭ ‬המהירים‭ ‬שעל‭ ‬שמה‭ ‬נקרא‭.‬
    החלומות‭ ‬בשלב‭ ‬זה‭ ‬לרוב‭ ‬חזותיים‭ ‬ועשירים‭ ‬בהתרחשויות‭ ‬ובדימויים‭, ‬כאשר‭ ‬יעירו‭ ‬אדם‭ ‬במהלך‭ ‬שלב‭ ‬זה‭ ‬הוא‭ ‬כמעט‭ ‬תמיד‭ ‬ידווח‭ ‬על‭ ‬חלום‭ ‬בו‭ ‬היה‭ ‬שקוע‭ (‬כאשר‭ ‬שיעור‭ ‬ההזכרות‭ ‬יורד‭ ‬ככל‭ ‬שעובר‭ ‬זמן‭ ‬ממושך‭ ‬יותר‭ ‬משלב‭ ‬זה‭ ‬עד‭ ‬ליקיצה‭). ‬כל‭ ‬השרירים‭ ‬הנמצאים‭ ‬מהצוואר‭ ‬ומטה‭ ‬משותקים‭, ‬על‭ ‬מנת‭ ‬למנוע‭ ‬מהחולם‭ ‬לבצע‭ ‬את‭ ‬חלומותיו‭.‬
    ישנה‭ ‬ירידה‭ ‬משמעותית‭ ‬ברגישות‭ ‬לגירויים‭ ‬שונים‭ (‬רעש‭, ‬טמפרטורה‭ ‬וכדומה‭), ‬אך‭ ‬גירויים‭ ‬בעלי‭ ‬משמעות‭ (‬למשל‭ ‬השמעת‭ ‬שמו‭ ‬של‭ ‬האדם‭ ‬הישן‭) ‬עשויים‭ ‬לגרום‭ ‬להתעוררות‭ ‬באופן‭ ‬מיידי‭.‬
    `,
  },
  9: {
    column: 10,
    row: 4,
    spanRow: 2,
    spanColumn: 2,
    gif: true,
    thumbnail: "",
    modalTitle: "שלבי השינה",
    modalBody: `1. /מעבר מעוררות לשינה
    במהלך‭ ‬שלב‭ ‬זה‭ ‬יש‭ ‬אובדן‭ ‬חלקי‭ ‬של‭ ‬המודעות‭ ‬לסביבה‭. ‬במהלך‭ ‬שלב‭ ‬זה‭ ‬נצפות‭ ‬לעיתים‭ ‬תופעות‭ ‬של‭ ‬קפיצת‭ ‬הירדמות‭ ‬ואף‭ ‬חוויות‭ ‬דמויות‭ ‬חלום‭ ‬המכונות‭ ‬הזיות‭ ‬היפנגוגיות‭.‬
    2 /שינה קלה
    המודעות‭ ‬לסביבה‭ ‬החיצונית‭ ‬נעלמת‭ ‬ופעילות‭ ‬השרירים‭ ‬יורדת‭. ‬מדובר‭ ‬בשינה‭ ‬קלה‭, ‬ממנה‭ ‬קל‭ ‬יחסית‭ ‬להתעורר‭.‬
    3 /שנת גלים איטיים
    כפי‭ ‬ששמו‭ ‬מרמז‭, ‬בשלב‭ ‬זה‭ ‬מאופיין‭ ‬בגלי‭ ‬מוח‭ ‬איטיים‭ ‬מאוד‭, ‬זה‭ ‬הרגע‭ ‬בו‭ ‬השינה‭ ‬היא‭ ‬עמוקה‭ ‬ביותר‭, ‬טרם‭ ‬נכנסים‭ ‬לשנת‭ ‬חלום‭ ‬והרגישות‭ ‬הנמוכה‭ ‬ביותר‭ ‬לגירויים‭ ‬חיצוניים‭. ‬
    `,
  },
  10: {
    column: 5,
    row: 3,
    spanRow: 2,
    spanColumn: 2,
    thumbnail: "",
    modalTitle: "שינה",
    modalBody: `היא תהליך מחזורי המאורגן לפי חלוקה לסבבים המופיעים בסדר קבוע זה לאחר זה. כל סבב מתאפיין במצב שינה שונה ההבחנה הבולטת היא בין מצב של שנת REM‏ (Rapid Eye Movement) לבין יתר מצבי השינה.`,
  },
  11: {
    column: 15,
    row: 2,
    spanRow: 3,
    spanColumn: 3,
    gif: true,
    thumbnail: "",
    modalTitle: "חלימה מודעת",
    modalBody: `חלימה‭ ‬מודעת‭, ‬הידועה‭ ‬גם‭ ‬בשם‭ ‬חלימה‭ ‬צלולה‭ ‬או‭ ‬חלום‭ ‬צלול‭, ‬היא‭ ‬תופעה‭ ‬המתרחשת‭ ‬כאשר‭ ‬אדם‭ ‬מודע‭ ‬לכך‭ ‬שהוא‭ ‬נמצא‭ ‬בחלום‭ ‬כאשר‭ ‬הוא‭ ‬ישן‭. ‬תודעה‭ ‬זו‭ ‬מאפשרת‭ ‬לאותו‭ ‬אדם‭ ‬לשלוט‭ ‬על‭ ‬פעולותיו‭ ‬ב‭"‬מרחב‭ ‬החלום‭". ‬חולמים‭ ‬צלולים‭, ‬המכונים‭ "‬אונירונאוטים‭", ‬מדווחים‭ ‬כי‭ ‬במהלך‭ ‬חלומות‭ ‬צלולים‭ ‬הם‭ ‬מסוגלים‭ ‬להתחשב‭ ‬בכל‭ ‬הנסיבות‭ ‬הקשורות‭ ‬לזמן‭ ‬העֵרוּת‭, ‬ואף‭ ‬לנהוג‭ ‬בחלום‭ ‬מתוך‭ ‬רצונם‭, ‬כל‭ ‬זאת‭ ‬כאשר‭ ‬הם‭ ‬נמצאים‭ ‬במרחב‭ ‬חלום‭ ‬הנתפס‭ ‬כאמיתי‭ ‬להפליא‭. ‬אדם‭ ‬הנמצא‭ ‬במצב‭ ‬של‭ ‬חלימה‭ ‬מודעת‭ ‬ולו‭ ‬שליטה‭ ‬מלאה‭ ‬יכול‭ ‬להפוך‭ ‬את‭ ‬מרחב‭ ‬החלום‭ ‬לכל‭ ‬מציאות‭ ‬מדומה‭ ‬שבה‭ ‬יחפוץ‭. ‬אונירונאוטים‭ ‬מיומנים‭ ‬פחות‭, ‬המתקשים‭ ‬לשלוט‭ ‬על‭ ‬מרחב‭ ‬החלום‭ ‬עצמו‭, ‬מסוגלים‭ ‬לשלוט‭ ‬על‭ ‬עצמם‭ ‬באותו‭ ‬מרחב‭, ‬ומתפקדים‭ ‬כמעין‭ ‬שחקנים‭ ‬בסיטואציה‭ ‬מוגדרת‭. ‬יש‭ ‬לציין‭ ‬כי‭ ‬חלומות‭ ‬מודעים‭ ‬הם‭ ‬בדרך‭ ‬כלל‭ ‬זכירים‭ ‬הרבה‭ ‬יותר‭ ‬מחלומות‭ ‬רגילים‭. ‬על‭ ‬פי‭ ‬אחת‭ ‬התאוריות‭, ‬חלומות‭ ‬צלולים‭ ‬זכירים‭ ‬יותר‭ ‬בשל‭ ‬העובדה‭ ‬שבדרך‭ ‬כלל‭ ‬האונירונאוט‭ ‬יתעורר‭ ‬מרוב‭ ‬התרגשות‭ ‬במהלך‭ ‬החלום‭ - ‬בדומה‭ ‬למה‭ ‬שקורה‭ ‬במהלך‭ ‬חלום‭ ‬בלהות‭. ‬כאשר‭ ‬מתעוררים‭ ‬לפתע‭ ‬מתוך‭ ‬שנת‭ ‬REM‭ (‬השלב‭ ‬במחזור‭ ‬השינה‭ ‬בו‭ ‬מתרחשים‭ ‬רוב‭ ‬החלומות‭) ‬קל‭ ‬הרבה‭ ‬יותר‭ ‬לזכור‭ ‬את‭ ‬החלומות‭ ‬מאשר‭ ‬כשמתעוררים‭ ‬אחרי‭ ‬שאר‭ ‬שלבי‭ ‬מחזור‭ ‬השינה‭.‬`,
  },
  12: {
    column: 12,
    row: 1,
    spanRow: 2,
    spanColumn: 2,
    thumbnail: "",
    gif: true,
    modalTitle: "חלום",
    modalBody: `חלום‭ ‬הוא‭ ‬פעילות‭ ‬מנטלית‭ ‬המתרחשת‭ ‬בזמן‭ ‬שינה‭, ‬היוצרת‭ ‬חוויה‭ ‬סובייקטיבית‭ ‬של‭ ‬מראות‭ ‬ותחושות‭. ‬החולם‭ ‬אינו‭ ‬מודע‭ ‬לכך‭ ‬שמדובר‭ ‬בחלום‭, ‬הוא‭ ‬חסר‭ ‬יכולת‭ ‬לשלוט‭ ‬בו‭ ‬ולכוון‭ ‬את‭ ‬השתלשלותו‭ ‬באופן‭ ‬רצוני‭, ‬וחוסר‭ ‬הפעלה‭ ‬של‭ ‬מנגנון‭ ‬הביקורת‭ ‬והשיפוט‭. ‬החלום‭ ‬הוא‭ ‬תופעה‭ ‬כלל‭-‬אנושית‭ ‬חוצת‭ ‬תרבויות‭, ‬שנצפתה‭ ‬גם‭ ‬בחיות‭. ‬משערים‭ ‬כי‭ ‬רבע‭ ‬מהשינה‭ ‬מוקדשת‭ ‬לחלום‭.‬`,
  },
  13: {
    column: 13,
    row: 5,
    spanRow: 2,
    spanColumn: 2,
    thumbnail: "",
    gif: true,
    modalSubTitle: `
    צילומים
    טד ספניה 
    הדפסה ראשונה 2011
 `,
    modalTitle: "ספר‭ ‬השינה",
    modalBody: `בשנות‭ ‬ה‭-‬70‭ ‬וה‭-‬80‭, ‬צלם‭ ‬השינה‭ ‬תיעד‭ ‬עשרות‭ ‬מצולמים‭ ‬עם‭ ‬מצלמות‭ ‬זמן‭-‬lapse‭ ‬מותקנות‭ ‬מעל‭ ‬מיטותיהם‭.‬
    מבין‭ ‬המשתתפים‭ ‬מוצגים‭ ‬ד‭"‬ר‭ ‬אלן‭ ‬הובסון‭, ‬נוירו‭-‬פיזיולוגים‭ ‬בהרווארד‭, ‬לצד‭ ‬אשתו‭, ‬שתועדו‭ ‬בשנת‭ ‬1977‭. ‬הובסון‭ ‬וחוקרים‭ ‬אחרים‭ ‬בחנו‭ ‬את‭ ‬התמונות‭ ‬של‭ ‬ספניה‭ ‬כדי‭ ‬לאשר‭ ‬את‭ ‬אורך‭ ‬מחזור‭ ‬השינה‭ (‬90‭ ‬דקות‭) ‬וכן‭ ‬את‭ ‬העובדה‭ ‬שרוב‭ ‬האנשים‭ ‬אינם‭ ‬זזים‭, ‬תוך‭ ‬כדי‭ ‬חלום‭, ‬אבל‭ ‬הם‭ ‬זזים‭ ‬הרבה‭ ‬בשלבים‭ ‬אחרים‭ ‬של‭ ‬השינה‭. ‬התמונות‭ ‬של‭ ‬ספניה‭ ‬עוררו‭ ‬השוואות‭ ‬לצילומים‭ ‬של‭ ‬מייברידג‮'‬‭ ‬של‭ ‬בעלי‭ ‬חיים‭ ‬בתנועה‭. ‬שני‭ ‬הצלמים‭ ‬יצרו‭ ‬אמנות‭ ‬שחשפה‭ ‬גם‭ ‬משהו‭ ‬על‭ ‬מדע‭ ‬והתנהגות‭. ‬המוזרות‭ ‬של‭ ‬שנת‭ ‬האדם‭ ‬לא‭ ‬הפסיקה‭ ‬לרתק‭ ‬את‭ ‬ספניה‭, ‬שהשתמש‭ ‬בעצמו‭ ‬כנושא‭ ‬הראשוני‭ ‬שלו‭. "‬אתה‭ ‬מסתכל‭ ‬במראה‭ ‬כל‭ ‬יום‭ ‬ואתה‭ ‬חושב‭ ‬שאתה‭ ‬מכיר‭ ‬את‭ ‬עצמך‭", ‬אמר‭ ‬בראיון‭ ‬כמה‭ ‬שנים‭ ‬לפני‭ ‬מותו‭. "‬ראיתי‭ ‬בתמונות‭ ‬האלה‭ ‬אני‭ ‬אחר‭ ‬שלא‭ ‬ידעתי‭ ‬על‭ ‬קיומו‭".`,
  },
};

function addElement(index) {
  // create a new div element
  const newGridItem = document.createElement("div");

  if (activeElements[index]) {
    const { row, column, spanRow, spanColumn } = activeElements[index];
    newGridItem.className = "active-grid-item";
    newGridItem.id = `grid-item-${index}`;
    newGridItem.style.gridArea = `${row} /${column} / span ${spanRow} / span ${spanColumn}`;

    newGridItem.addEventListener("click", () => {
      openModal(index);
    });
  } else {
    newGridItem.className = "grid-item";
    newGridItem.id = `grid-item-${index}`;
  }
  if (activeElements[index]?.gif) {
    newGridItem.style.backgroundImage = `url(./assets/${index}.gif)`;
  } else {
    newGridItem.style.backgroundImage = `url(./assets/${index}.png)`;
  }
  // and give it some content
  const newContent = document.createTextNode("");

  // add the text node to the newly created div
  newGridItem.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("grid-container");
  currentDiv.appendChild(newGridItem);
}

for (let i = 0; i < 14; i++) {
  addElement(i);
}

const closeModal = () => {
  const modal = document.getElementById("modal");
  const modalBackground = document.getElementById("modal-background");

  const title = document.getElementById("title");
  const subTitle = document.getElementById("subTitle");
  const body = document.getElementById("body");

  title.innerText = "";
  body.innerText = "";
  subTitle.innerText = "";

  modal.style.visibility = "hidden";
  modalBackground.style.visibility = "hidden";
};

const openModal = (id) => {
  const modal = document.getElementById("modal");
  const modalBackground = document.getElementById("modal-background");
  modal.style.visibility = "visible";
  modalBackground.style.visibility = "visible";
  const title = document.getElementById("title");
  const subTitle = document.getElementById("subTitle");
  const body = document.getElementById("body");

  title.innerText = "";
  body.innerText = "";
  subTitle.innerText = "";

  // and give it some content
  const titleContent = document.createTextNode(activeElements[id].modalTitle);
  const subTitleContent = document.createTextNode(
    activeElements[id].modalSubTitle
  );
  const bodyContent = document.createTextNode(activeElements[id].modalBody);

  // add the text node to the newly created div
  title.appendChild(titleContent);
  body.appendChild(bodyContent);
  console.log(subTitleContent);
  activeElements[id].modalSubTitle
    ? subTitle.appendChild(subTitleContent)
    : (subTitle.innerText = "");
};

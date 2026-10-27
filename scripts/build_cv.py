"""Build the public CV. Requires ReportLab; outputs a searchable A4 PDF."""

from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output/pdf/abdallah-id-lahcen-cv.pdf"
INK = colors.HexColor("#202824")
MUTED = colors.HexColor("#59645e")
ACCENT = colors.HexColor("#315447")
LINE = colors.HexColor("#ced7d1")
MARGIN = 44
CONTENT_LEFT = MARGIN + 6  # Platypus frames reserve six points of inner padding.
WIDTH = A4[0] - CONTENT_LEFT * 2

body = ParagraphStyle(
    "Body", fontName="Helvetica", fontSize=10.1, leading=13.2,
    textColor=INK, spaceAfter=2,
)
meta = ParagraphStyle(
    "Meta", parent=body, fontSize=9.1, leading=11.8,
    textColor=MUTED, spaceAfter=2,
)
heading = ParagraphStyle(
    "Section", parent=body, fontName="Helvetica-Bold", fontSize=10.2,
    leading=13.5, textColor=ACCENT, spaceBefore=9, spaceAfter=5,
    keepWithNext=True,
)
role = ParagraphStyle(
    "Role", parent=body, fontName="Helvetica-Bold", fontSize=10.5,
    leading=13.4, spaceAfter=0,
)
date = ParagraphStyle(
    "Date", parent=meta, alignment=TA_RIGHT, spaceAfter=0, leading=13.4,
)
bullet = ParagraphStyle(
    "Bullet", parent=body, leftIndent=9, firstLineIndent=0,
    bulletIndent=0, spaceAfter=2.5,
)


def p(text, style=body):
    return Paragraph(text, style)


def link(url, label):
    return f'<link href="{escape(url, {chr(34): "&quot;"})}" color="#315447">{escape(label)}</link>'


def titled_row(title, dates):
    row = Table([[p(title, role), p(dates, date)]], colWidths=[WIDTH - 132, 132])
    row.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return row


def job(title, dates, context, points):
    return KeepTogether([
        titled_row(title, dates), p(context, meta),
        *[Paragraph(text, bullet, bulletText="-") for text in points],
        Spacer(1, 4),
    ])


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(CONTENT_LEFT, 31, A4[0] - CONTENT_LEFT, 31)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 8)
    canvas.drawString(CONTENT_LEFT, 20, "Abdallah Id Lahcen | abdev.online")
    canvas.drawRightString(A4[0] - CONTENT_LEFT, 20, str(doc.page))
    canvas.restoreState()


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT), pagesize=A4, leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=35, bottomMargin=42, title="Abdallah Id Lahcen - CV",
        author="Abdallah Id Lahcen", subject="Android Developer - Experience and Skills",
        creator="ABDev", pageCompression=1,
    )
    story = [
        p("Abdallah Id Lahcen", ParagraphStyle(
            "Name", parent=body, fontName="Helvetica-Bold", fontSize=25,
            leading=29, spaceAfter=3,
        )),
        p("Android Developer", ParagraphStyle(
            "Title", parent=body, fontSize=12.2, leading=16,
            textColor=ACCENT, spaceAfter=6,
        )),
        p("Morocco &nbsp; | &nbsp; " + link("mailto:abdallah.idlahcen2@gmail.com", "abdallah.idlahcen2@gmail.com")
          + " &nbsp; | &nbsp; " + link("https://abdev.online/", "abdev.online"), meta),
        p(link("https://www.linkedin.com/in/abdallah-id-lahcen-743094162/", "LinkedIn: abdallah-id-lahcen-743094162")
          + " &nbsp; | &nbsp; " + link("https://github.com/abdeldev007", "GitHub: abdeldev007"), meta),
        Spacer(1, 7),
        HRFlowable(width="100%", thickness=1, color=ACCENT, spaceAfter=9),
        p("Android developer based in Morocco, working remotely for stadtraum GmbH in Germany. "
          "My background includes native Android and client applications built with Kotlin and Java. "
          "Outside work, I build SoulSync and explore Kotlin Multiplatform and iOS through PetPals."),
        p("EXPERIENCE", heading),
        job("Android Developer | stadtraum GmbH", "Jan 2023 - Present",
            "Full-time | Remote | Germany", [
                "Work remotely as an Android Developer for stadtraum GmbH, a German company.",
            ]),
        job("Android Developer | AjiCreative", "Jan 2021 - Jan 2023",
            "Full-time | Agadir, Morocco", [
                "Developed Android client apps for hospitality, food delivery, barber services and football communities, including Gloo Gloo, Illico, Elige and Number 10.",
                "Built Kotlin applications using MVVM and Retrofit, with social sign-in, Google Maps and Stripe integration.",
            ]),
        job("Freelance Android Developer", "Aug 2019 - Jan 2021",
            "Part-time | Client work through Fiverr | Agadir, Morocco", [
                "Built an Android TV app for clinic waiting rooms with YouTube streaming, RSS news and GPS-based weather.",
                "Added login features and fixed bugs for Wish2; developed IPTV playback from M3U playlists.",
            ]),
        p("PERSONAL PROJECTS", heading),
        p("SoulSync | Native Android", role),
        p("A dating app with compatibility-based discovery, detailed profiles and real-time chat.<br/>"
          + link("https://api.soulsync.space/", "Project website") + " | "
          + link("https://play.google.com/store/apps/details?id=com.abdev.soulsync", "Google Play")),
        Spacer(1, 3),
        p("PetPals | Kotlin Multiplatform | In development", role),
        p("A side project for pets and their people, with discovery, communities, chat and playdate planning. "
          "Android and iOS releases are planned; the iOS experience is in development. "
          + link("https://api.petpals.live/", "Preview website")),
        p("TECHNICAL SKILLS", heading),
        p("<b>Android:</b> Advanced Android development, Kotlin, Java, Jetpack Compose, Android SDK."),
        p("<b>Multiplatform:</b> Kotlin Multiplatform through personal Android and iOS projects."),
        p("<b>Architecture and data:</b> MVVM, Hilt, Flow, LiveData, Retrofit, Room, SQLite."),
        p("<b>Testing:</b> Unit testing and UI testing."),
        p("<b>Services:</b> Firebase Authentication, Firestore, Realtime Database, Crashlytics, push notifications, Google Maps, Stripe."),
        p("<b>Tools:</b> Android Studio, Codex-assisted development."),
        p("EDUCATION", heading),
        titled_row("Computer Science | OFPPT, Tafraout", "2017 - 2019"),
        p("Specialized Institute of Applied Technology", meta),
        titled_row("Chemical Physics | Ibn Zohr University", "2013 - 2015"),
        p("Associate's degree", meta),
        p("LANGUAGES", heading),
        p("Tamazight | Arabic | English | French"),
    ]
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(OUTPUT)


if __name__ == "__main__":
    build()

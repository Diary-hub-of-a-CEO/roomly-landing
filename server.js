const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const rooms = [
  {
    id: 1,
    title: 'Modern 2BHK Apartment',
    location: 'Baluwatar, Kathmandu',
    type: 'Apartment',
    price: 'Rs 28,000/month',
    beds: 2,
    baths: 1,
    verified: true,
    description: 'A bright and modern 2BHK apartment with fast internet, secure access, and a premium neighborhood near cafes and parks.',
    amenities: ['Furnished', 'High-speed Wi-Fi', '24/7 Security', 'Laundry Facility'],
    available: true,
  },
  {
    id: 2,
    title: 'Cozy Room for Rent',
    location: 'Patan, Lalitpur',
    type: 'Room',
    price: 'Rs 9,500/month',
    beds: 2,
    baths: 1,
    verified: true,
    description: 'Comfortable private room in a shared flat with a friendly community, ideal for students and young professionals.',
    amenities: ['Shared Kitchen', 'Cleaning Service', 'Nearby Transport', 'Secured Building'],
    available: true,
  },
  {
    id: 3,
    title: 'Student Hostel Bed',
    location: 'Kirtipur',
    type: 'Hostel',
    price: 'Rs 6,000/month',
    beds: 2,
    baths: 1,
    verified: true,
    description: 'Affordable student-friendly hostel bed close to university campuses, with study spaces and communal lounges.',
    amenities: ['Study Area', 'Meal Plan', 'Water Supply', '24/7 Security'],
    available: true,
  },
  {
    id: 4,
    title: 'Co-living Space',
    location: 'Thapathali, Kathmandu',
    type: 'Co-living',
    price: 'Rs 12,500/month',
    beds: 1,
    baths: 1,
    verified: false,
    description: 'A modern co-living suite with flexible lease terms, private bedroom, and shared social spaces for professionals.',
    amenities: ['Private Room', 'Community Events', 'Cleaning Included', 'Gym Access'],
    available: false,
  },
];

function sendResponse(res, statusCode, body, contentType = 'text/html') {
  res.writeHead(statusCode, {
    'Content-Type': contentType,
    'Cache-Control': 'no-cache',
  });
  res.end(body);
}

function getRoomById(id) {
  return rooms.find(room => room.id === id);
}

function renderRoomPage(room) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${room.title} | RoomLy</title>
  <link rel="stylesheet" href="/styles.css">
  <style>
    .room-page { padding: 2rem 1rem; max-width: 1000px; margin: 0 auto; }
    .room-header { display: grid; gap: 1rem; margin-bottom: 2rem; }
    .room-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 2rem; box-shadow: 0 18px 50px rgba(15, 23, 42, 0.06); }
    .room-card h1 { margin-bottom: 0.75rem; font-size: 2rem; }
    .room-card p, .room-card li { color: #334155; }
    .room-meta { display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0; }
    .room-meta span { background: #eff6ff; color: #1d4ed8; padding: 0.6rem 1rem; border-radius: 999px; font-weight: 600; }
    .room-available { color: ${room.available ? '#16a34a' : '#dc2626'}; font-weight: 700; }
    .room-cta { display: inline-flex; align-items: center; justify-content: center; margin-top: 1.5rem; padding: 0.95rem 1.5rem; border-radius: 999px; background: #4338ca; color: white; text-decoration: none; }
    .room-cta:hover { background: #3730a3; }
    .room-list-link { display: inline-block; margin-top: 1rem; color: #4f46e5; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="room-page">
    <a class="room-list-link" href="/rooms">← View all rooms</a>
    <div class="room-card">
      <h1>${room.title}</h1>
      <div class="room-meta">
        <span>${room.location}</span>
        <span>${room.type}</span>
        <span>${room.price}</span>
        <span>${room.beds} bed${room.beds > 1 ? 's' : ''}</span>
        <span>${room.baths} bath${room.baths > 1 ? 's' : ''}</span>
      </div>
      <p class="room-available">${room.available ? 'Available now' : 'Currently unavailable'}</p>
      <p>${room.description}</p>
      <h2>Amenities</h2>
      <ul>
        ${room.amenities.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <p>${room.verified ? 'Verified listing by RoomLy.' : 'Pending verification by RoomLy.'}</p>
      <a class="room-cta" href="mailto:roomly.connect@gmail.com?subject=Inquiry%20about%20${encodeURIComponent(room.title)}">Contact landlord</a>
    </div>
  </div>
</body>
</html>`;
}

function renderRoomsListPage() {
  const roomCards = rooms.map(room => `
      <article class="listing-card" style="border:1px solid #e2e8f0; padding:1.25rem; border-radius:1rem; background:#fff; margin-bottom:1rem;">
        <div style="display:flex; justify-content:space-between; gap:0.5rem; flex-wrap:wrap;">
          <div>
            <h3 style="margin:0 0 0.5rem 0; font-size:1.2rem;">${room.title}</h3>
            <p style="margin:0 0 0.5rem 0; color:#475569;">${room.location} · ${room.type}</p>
          </div>
          <div style="font-weight:700; color:#1e3a8a;">${room.price}</div>
        </div>
        <p style="margin:0 1rem 1rem 0; color:#64748b;">${room.description}</p>
        <a href="/rooms/${room.id}" style="display:inline-block; margin-top:0.65rem; color:#4338ca; font-weight:700;">View details</a>
      </article>
    `).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RoomLy Rooms | RoomLy</title>
  <link rel="stylesheet" href="/styles.css">
  <style>
    body { background:#f8fafc; }
    .rooms-list { padding: 2rem 1rem; max-width: 1100px; margin: 0 auto; }
    .rooms-list h1 { margin-bottom: 1rem; font-size: 2.5rem; }
    .rooms-list p { color: #475569; margin-bottom: 2rem; }
    .rooms-list a.back-link { color: #4338ca; font-weight: 700; text-decoration: none; display: inline-block; margin-bottom: 2rem; }
  </style>
</head>
<body>
  <div class="rooms-list">
    <a class="back-link" href="/">← Back to RoomLy home</a>
    <h1>Discover all RoomLy listings</h1>
    <p>Each room page is served by the new RoomLy backend and includes unique details for every listing.</p>
    ${roomCards}
  </div>
</body>
</html>`;
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Static assets
  if (pathname === '/styles.css' || pathname === '/script.js') {
    const filePath = path.join(__dirname, pathname.slice(1));
    fs.readFile(filePath, (err, data) => {
      if (err) {
        sendResponse(res, 404, 'Not Found');
        return;
      }
      const contentType = pathname.endsWith('.css') ? 'text/css' : 'application/javascript';
      sendResponse(res, 200, data, contentType);
    });
    return;
  }

  // API endpoints
  if (pathname === '/api/rooms') {
    sendResponse(res, 200, JSON.stringify(rooms), 'application/json');
    return;
  }

  const roomApiMatch = pathname.match(/^\/api\/rooms\/(\d+)$/);
  if (roomApiMatch) {
    const roomId = Number(roomApiMatch[1]);
    const room = getRoomById(roomId);
    if (!room) {
      sendResponse(res, 404, JSON.stringify({ error: 'Room not found' }), 'application/json');
      return;
    }
    sendResponse(res, 200, JSON.stringify(room), 'application/json');
    return;
  }

  // Dynamic room pages
  if (pathname === '/rooms') {
    sendResponse(res, 200, renderRoomsListPage(), 'text/html');
    return;
  }

  const roomPageMatch = pathname.match(/^\/rooms\/(\d+)$/);
  if (roomPageMatch) {
    const roomId = Number(roomPageMatch[1]);
    const room = getRoomById(roomId);
    if (!room) {
      sendResponse(res, 404, '<h1>Room not found</h1><p>The requested room page does not exist.</p>');
      return;
    }
    sendResponse(res, 200, renderRoomPage(room), 'text/html');
    return;
  }

  // Root landing page
  if (pathname === '/' || pathname === '/index.html') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        sendResponse(res, 500, 'Error loading page');
        return;
      }
      sendResponse(res, 200, data, 'text/html');
    });
    return;
  }

  // Fallback for other static files or assets
  const fallbackPath = path.join(__dirname, pathname);
  if (!pathname.includes('..')) {
    fs.readFile(fallbackPath, (err, data) => {
      if (!err) {
        const ext = path.extname(fallbackPath).toLowerCase();
        const contentType = ext === '.css' ? 'text/css' : ext === '.js' ? 'application/javascript' : 'text/html';
        sendResponse(res, 200, data, contentType);
        return;
      }
      sendResponse(res, 404, 'Not Found');
    });
    return;
  }

  sendResponse(res, 404, 'Not Found');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`RoomLy backend running at http://localhost:${port}`);
  console.log('Available routes: /, /rooms, /rooms/1, /rooms/2, /rooms/3, /rooms/4, /api/rooms');
});

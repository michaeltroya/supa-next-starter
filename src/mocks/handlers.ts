import { HttpResponse, http } from 'msw/http'

export const handlers = [
  // Intercept the "GET /message" request.
  http.get('/api/message', () =>
    HttpResponse.json({ message: 'Hello from the handler!' }),
  ),
]

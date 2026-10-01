# SingleThread
A local multi-tier network simulation built on macOS featuring a custom dnsmasq local DNS resolver, an Nginx reverse proxy load balancer utilizing TLS termination (mkcert), and redundant Node.js application backends with HTTP caching and comprehensive Wireshark protocol verification.



# Computer Networks - Phase 1: Build & Observe

## Team Information
* **Team Name:** [SingleThread]
* **Student Name:** Yojana Gupta
* **Enrollment Number:** [2401010312]

## Architecture Overview
This project implements a multi-tier local network simulation on macOS:
* **DNS Layer:** Local resolution configured using `dnsmasq` for `.test` domains.
* **Edge / Reverse Proxy:** Nginx handling TLS termination (via `mkcert`) and round-robin load balancing on port `8443`.
* **Backend Tier:** Two redundant Node.js REST APIs running on ports `3001` and `3002` with HTTP caching enabled (`Cache-Control: max-age=60`).

## How to Run the Backends Locally

1. **Start Backend A:**
   ```bash
   cd backend-a
   node server.js

1. **Start Backend B:**
    ```bash
    cd backend-b
    node server.js


## Verification & Testing
Access the load balancer securely via: https://app.team1.test:8443/api/status

Wireshark network capture verifying DNS, TCP handshake, TLS, and HTTP flows is stored locally as Phase1_Capture.pcapng.
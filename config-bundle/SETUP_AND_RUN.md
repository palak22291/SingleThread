# Single Thread — Configuration & Launch Guide

## 1. TLS Certificate Setup Notes
- **Edge Termination:** Nginx terminates TLS on port `8443` using X.509 certificates (`/etc/ssl/certs/ssl-cert-snakeoil.pem` and `/etc/ssl/private/ssl-cert-snakeoil.key` on the Ubuntu edge node, or `mkcert` generated `app.team1.test.pem` for trusted macOS local CA validation).
- **Client Verification:** Client requests verify the TLS handshake using `curl -I https://app.team1.test:8443` (or `-kI` when testing with self-signed snakeoil certificates).

## 2. Backend Launch Instructions
Navigate to the `backend/` directory on the server/VM and start both isolated Node.js instances in the background:

```bash
PORT=3001 node "backend a.js" &
PORT=3002 node "backend b.js" &

```


## Verify both services are listening


sudo ss -tuln | grep -E "3001|3002"



## 3. Firewall Rules (Service Isolation — Extension C)
 To prevent direct external access to backend ports 3001 and 3002 while allowing HTTPS traffic to the Nginx edge proxy on port 8443:


# Enable UFW and set default deny policy

sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow external traffic only to the Nginx SSL edge port
sudo ufw allow 8443/tcp

# Reload and verify rules
sudo ufw enable
sudo ufw status verbose

# Rollback / Cleanup:


sudo ufw delete allow 8443/tcp
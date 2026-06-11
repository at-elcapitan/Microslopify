## Microslopify

is a Safari extension inspired by [Microslop](https://github.com/4O4-wasd/Microslop), that converts Microslop-related words to their correct variants.

## Navigation

- [Installation - Prebuilt](#using-prebuilt-version)
- [Installation - Building](#building)
- [Known Issues](#known-issues)

## Working demo

<img width="671" height="136" alt="Screenshot 2026-04-16 at 7 39 42 PM" src="https://github.com/user-attachments/assets/273d00cf-552e-4d8f-9fef-0d1a7982dc0a" />

<img width="702" height="150" alt="Screenshot 2026-04-16 at 7 39 29 PM" src="https://github.com/user-attachments/assets/31e1db15-2581-46bd-bb95-6dae2290d850" />

<img width="579" height="414" alt="Screenshot 2026-04-16 at 7 39 59 PM" src="https://github.com/user-attachments/assets/c780a941-df6e-45b5-8f10-921bc351d3fc" />

## Configuration

Extension can be configurred via it's popup window

<img width="355" height="337" alt="Screenshot 2026-04-16 at 7 40 31 PM" src="https://github.com/user-attachments/assets/f8d6573d-2373-4603-9475-39f65f7d26f4" />


## Installation

### Using prebuilt version

Available prebuilt versions:
- arm64 (Apple silicon)
- x86_64 (Intel)
- Universal

Can be found at [releases page](https://github.com/at-elcapitan/Microslopify/releases)

### Building

> [!NOTE]
> Requirements: macOS 11+, Xcode

#### 1. Copy the repository and open it in Xcode

```bash
git clone https://github.com/at-elcapitan/Microslopify
```

#### 2. Set-up signature

2.1 Double-click at project's root node

<img width="263" height="167" alt="Screenshot 2026-04-16 at 7 42 10 PM" src="https://github.com/user-attachments/assets/5aa2eff3-00e4-4feb-a490-a5119fc6230b" />

---

2.2 Open "Signing & Capabilities" for target `Microslopify`

<img width="1142" height="369" alt="Screenshot 2026-04-17 at 12 30 40 PM" src="https://github.com/user-attachments/assets/d9eafe14-e773-4640-8a42-c81604acf418" />

---

2.3 Change signing team to the valid one

<img width="749" height="154" alt="Screenshot 2026-04-16 at 7 43 21 PM" src="https://github.com/user-attachments/assets/9503735a-afd2-467c-8117-b817775feb8d" />

---

2.4 Repeat steps 2.2 and 2.3 for target `Microslopify Extension`

<img width="635" height="232" alt="Screenshot 2026-04-17 at 12 30 01 PM" src="https://github.com/user-attachments/assets/def75b61-d546-4c50-886f-9ae6ea6122d5" />

---

#### 3. Build&Run

<img width="441" height="238" alt="Screenshot 2026-04-16 at 7 45 44 PM" src="https://github.com/user-attachments/assets/a77d8484-b47a-463d-bb81-ff3363205168" />

## Known issues

Sites that working bad with extension enabled. Highly recomended to disable it for them.

| Site    | Link |
| ------- | ---- |
| Microslop Teams | https://teams.cloud.microsoft |

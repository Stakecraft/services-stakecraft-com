---
sidebar_label: 'Moonriver'
sidebar_position: 3
slug: substrate-moonriver-snapshot
title: moonriver
description: moonriver network fullnode snapshot
---

Download daily snapshot:

| LATEST HEIGHT | SIZE | CHAIN ID | PRUNING | DATE | TIME | LINK |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| 222222 | 25GB | moonriver-1 | 11.02.2023 | archive | 03:10 | [moonriver-1_11.02.2023.tar](https://download.snapshots.stakecraft.com/moonriver/moonriver-1_11.02.2023.tar.gz) |
| 110000 | 34GB | moonriver-1 | 10.02.2023 | 1000 | 03:10 | [moonriver-1_10.02.2023.tar](https://download.snapshots.stakecraft.com/moonriver/moonriver-1_10.02.2023.tar.gz) |


## Instructions
:::tip Our tips
We are providing several commands in order to download and extract the snapshot to its corresponding place. Don't hesitate to adjust the commands according to your setup.
:::

### Stop the service:

```bash
sudo systemctl stop moonriver.service
```

:::danger Back up your session keys
Please make sure you have a copy of the session keys in case you mess up with snapshot location. 
:::

### Download the snapshot archive:

```bash
wget -O - https://download.snapshots.stakecraft.com/moonriver/moonriver-1_11.02.2023.tar.gz | tar -xzvf -C ~/.local/share/moonriver/
```

### Start service and check the logs:

```bash
sudo systemctl start moonriver.service
sudo journalctl -u moonriver.service -f
```
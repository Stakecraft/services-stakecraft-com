---
sidebar_label: 'Stargaze'
sidebar_position: 7
slug: cosmos-stargaze-snapshot
title: Stargaze
description: NFT Marketplace
---

Download daily snapshot:

| LATEST HEIGHT | SIZE | CHAIN ID | PRUNING | DATE | TIME | LINK |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| 222222 | 25GB | stargaze-1 | 11.02.2023 | archive | 03:10 | [stargaze-1_11.02.2023.tar](https://download.snapshots.stakecraft.com/stargaze/stargaze-1_11.02.2023.tar.gz) |
| 110000 | 34GB | stargaze-1 | 10.02.2023 | 1000 | 03:10 | [stargaze-1_10.02.2023.tar](https://download.snapshots.stakecraft.com/stargaze/stargaze-1_10.02.2023.tar.gz) |


## Instructions
:::tip Our tips
We are providing several commands in order to download and extract the snapshot to its corresponding place. Don't hesitate to adjust the commands according to your setup.
:::

### Stop the service:

```bash
sudo systemctl stop stargaze.service
```

:::danger Back up your priv_validator_state.json
Please make sure you have a copy of priv_validator_state.json from data folder. 
:::

1. Backup priv_validator_state.json:
```bash
cp $HOME/.starsd/data/priv_validator_state.json $HOME/priv_validator_state.json
```

2. Delete the data:
```bash
starsd tendermint unsafe-reset-all --home $HOME/.starsd
```

### Download the snapshot archive:

```bash
wget -O - https://download.snapshots.stakecraft.com/stargaze/stargaze-1_11.02.2023.tar.gz | tar -xzvf -C ~/.starsd/data/
```

### Copy your priv_validator_state.json to its original place:
```bash
mv $HOME/priv_validator_state.json $HOME/.starsd/data/priv_validator_state.json
```

### Start service and check the logs:

```bash
sudo systemctl start stargaze.service
sudo journalctl -u stargaze.service -f
```
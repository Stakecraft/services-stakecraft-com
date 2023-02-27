---
sidebar_label: 'Q-Testnet'
sidebar_position: 1
slug: q-testnet-snapshot
title: Q-Testnet
description: Q network testnet snapshot
---

Download daily snapshot:

| LATEST HEIGHT | SIZE | CHAIN ID | PRUNING | DATE | TIME | LINK |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| 0 | 35G | q-testnet | Archive | 2023-02-27 | 03:32:04 | [q-testnet_2023-02-26.tar](https://snapshots.stakecraft.com/q-testnet_2023-02-26.tar) |


## Instructions
:::tip Our tips
We are providing several commands in order to download and extract the snapshot to its corresponding place. Don't hesitate to adjust the commands according to your setup.
:::

### Stop the service:

```bash
cd testnet-public-tools/testnet-validator
```

:::danger Back up your keystore directory
Please make sure you have a copy of the keys in case you mess up with snapshot location.
:::

### Remove the old chaindata folder
```bash
docker-compose down
sudo rm -rf /var/lib/docker/volumes/testnet-validator_testnet-validator-node-data/_data/geth/chaindata
sudo mkdir /var/lib/docker/volumes/testnet-validator_testnet-validator-node-data/_data/geth/chaindata
```

### Download the snapshot archive:

```bash
wget -O - https://snapshots.stakecraft.com/q-testnet_2023-02-26.tar | tar -xzvf -C /var/lib/docker/volumes/testnet-validator_testnet-validator-node-data/_data/geth/chaindata
```

### Start service and check the logs:

```bash
docker-compose up -d
docker-compose logs -f
```
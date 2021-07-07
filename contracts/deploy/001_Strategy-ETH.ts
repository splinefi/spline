import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();
    const { deploy } = hre.deployments;

    await deploy("Strategy", {
        from: deployer,
        args: [
            0,
            0,
            "Yearn",
            "0x0000000000000000000000000000000000000000",
            "0x0000000000000000000000000000000000000000",
            "0xa258C4606Ca8206D8aA700cE2143D7db854D168c",
            "ETH",
            "QmYWZUZ6A7v7F92PPx9U1Znukv3QCHMspiEZ36HFishiib",
            deployer,
        ],
        log: true,
        autoMine: true,
    });
};

export default func;
func.id = "StrategyETH";
func.tags = ["StrategyETH"];

from __future__ import annotations

from typing import Optional

class SecretProvider:
    def get(self, key: str) -> Optional[str]:
        # Replace with Azure Key Vault SDK in production.
        return None


secret_provider = SecretProvider()
